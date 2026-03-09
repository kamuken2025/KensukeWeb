import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <main className="container">
      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">Blog</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          日記（ブログ）
        </p>
      </header>

      <section className="card">
        <p style={{ marginTop: 0 }}>
          ここに記事一覧を作っていきます（まずはページを作成して404を解消）。
        </p>
        <p className="muted" style={{ marginBottom: 0 }}>
          記事は <code>content/blog</code> にMarkdownで追加する予定です。
        </p>
      </section>

      <footer className="footer">
        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}