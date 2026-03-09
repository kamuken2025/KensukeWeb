import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="container">
      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">Blog</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          日記（Markdownで追加 → pushで公開）
        </p>
      </header>

      <section className="card">
        {posts.length === 0 ? (
          <p className="muted" style={{ margin: 0 }}>
            まだ記事がありません。<code>content/blog</code> に .md を追加してください。
          </p>
        ) : (
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {posts.map((p) => (
              <li key={p.slug} style={{ marginBottom: 10 }}>
                <Link href={`/blog/${p.slug}`} style={{ fontWeight: 700 }}>
                  {p.title}
                </Link>
                <div className="muted" style={{ fontSize: 13 }}>
                  {p.date}
                  {p.tags.length ? ` · ${p.tags.join(", ")}` : ""}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer className="footer">
        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}