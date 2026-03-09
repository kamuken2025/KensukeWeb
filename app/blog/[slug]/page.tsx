import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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

  return (
    <main className="container">
      {/* 記事ページ用の最小CSS（ブログっぽく） */}
      <style>{`
        .post h1 { margin-top: 0; }
        .post h2 { margin-top: 28px; margin-bottom: 10px; font-size: 20px; }
        .post h3 { margin-top: 22px; margin-bottom: 8px; font-size: 17px; }
        .post p { margin-top: 0; }
        .post ul, .post ol { padding-left: 22px; }
        .post li { margin: 6px 0; }
        .post blockquote {
          margin: 12px 0;
          padding: 10px 14px;
          border-left: 3px solid var(--line);
          background: #fafbf9;
          color: var(--muted);
          border-radius: 12px;
        }
        .post code {
          padding: 2px 6px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #fafbf9;
          font-size: 0.95em;
        }
        .post pre {
          overflow-x: auto;
          padding: 12px 14px;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: #0b1020;
          color: #e8eefc;
        }
        .post pre code {
          border: none;
          background: transparent;
          padding: 0;
          color: inherit;
        }
        .post a { text-decoration: underline; }
        .meta { margin-top: 8px; }
      `}</style>

      <article className="card post">
        <h1 className="h1">{meta.title}</h1>
        <p className="muted meta">
          {meta.date}
          {meta.tags.length ? ` · ${meta.tags.join(", ")}` : ""}
        </p>

        <div style={{ marginTop: 18 }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </div>
      </article>

      <footer className="footer">
        <Link href="/blog">← Back to Blog</Link>
      </footer>
    </main>
  );
}