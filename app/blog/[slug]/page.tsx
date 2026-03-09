import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <main className="container">
        <h1 className="h1">Not found</h1>
        <p className="muted">記事が見つかりません。</p>
        <footer className="footer">
          <Link href="/blog">← Back to Blog</Link>
        </footer>
      </main>
    );
  }

  const { meta, body } = post;
  const paragraphs = body.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);

  return (
    <main className="container">
      <article className="card">
        <h1 className="h1">{meta.title}</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          {meta.date}
          {meta.tags.length ? ` · ${meta.tags.join(", ")}` : ""}
        </p>

        <div style={{ marginTop: 18 }}>
          {paragraphs.map((p, i) => (
            <p key={i} style={{ marginTop: 0 }}>
              {p}
            </p>
          ))}
        </div>
      </article>

      <footer className="footer">
        <Link href="/blog">← Back to Blog</Link>
      </footer>
    </main>
  );
}