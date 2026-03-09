import Link from "next/link";

export default function ContactPage() {
  const email = "kamuken(at)obihiro.ac.jp"; // そのまま公開したい表記に調整OK

  return (
    <main className="container">
      <style>{`
        .grid{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .mono{
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
        .small{ font-size: 13px; }
        .list{ margin: 0; padding-left: 18px; }
        @media (max-width: 860px){
          .grid{ grid-template-columns: 1fr; }
        }
      `}</style>

      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">Contact</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          連絡先 / Inquiry
        </p>
      </header>

      <section className="grid">
        {/* Contact info */}
        <div className="card">
          <h2 className="h2">Email</h2>
          <p style={{ marginTop: 0 }}>
            <span className="mono">{email}</span>
          </p>
          <p className="muted small" style={{ marginBottom: 0 }}>
            ※ 迷惑メール対策として “@” を “(at)” にしています。送信時は “@” に置き換えてください。
          </p>
        </div>

        {/* What to include */}
        <div className="card">
          <h2 className="h2">What to include</h2>
          <ul className="list">
            <li>ご用件（例：共同研究、講演依頼、データ解析の相談 など）</li>
            <li>対象（場所・作物/草地・期間・規模など）</li>
            <li>希望するアウトプット（地図、指標、レポート、コード等）</li>
            <li>希望時期・締切</li>
          </ul>
        </div>
      </section>

      {/* Optional: quick links */}
      <section className="card" style={{ marginTop: 14 }}>
        <h2 className="h2">Links</h2>
        <ul className="list">
          <li>
            GitHub:{" "}
            <a href="https://github.com/kamuken2025" target="_blank" rel="noreferrer">
              github.com/kamuken2025
            </a>
          </li>
        </ul>
      </section>

      {/* Note */}
      <section className="card" style={{ marginTop: 14 }}>
        <h2 className="h2">Note</h2>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          出張等で返信が遅れる場合があります。お急ぎの場合は件名に【至急】などを付けてください。
        </p>
      </section>

      <footer className="footer">
        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}