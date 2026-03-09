import fs from "fs";
import path from "path";

export type BlogMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  tags: string[];
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontMatter(raw: string): { meta: Partial<BlogMeta>; body: string } {
  if (!raw.startsWith("---")) return { meta: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { meta: {}, body: raw };

  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trim();

  const meta: any = {};
  for (const line of fm.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();

    val = val.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");

    if (key === "tags") {
      const m = val.match(/\[(.*)\]/);
      meta.tags = m
        ? m[1]
            .split(",")
            .map((s) => s.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"))
            .filter(Boolean)
        : [];
    } else {
      meta[key] = val;
    }
  }

  return { meta, body };
}

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { meta } = parseFrontMatter(raw);

    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "1970-01-01",
      tags: meta.tags ?? [],
    } satisfies BlogMeta;
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): { meta: BlogMeta; body: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, body } = parseFrontMatter(raw);

  return {
    meta: {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "1970-01-01",
      tags: meta.tags ?? [],
    },
    body,
  };
}