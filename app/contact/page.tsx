export default function ContactPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, lineHeight: 1.7 }}>
      <h1>Contact</h1>
      <ul>
        <li>Email: kamuken@obihiro.ac.jp（例）</li>
        <li>GitHub: あなたのURL</li>
      </ul>
      <p style={{ color: "#555" }}>
        ※後でGoogleフォームのリンクに差し替えるとスパム対策になります。
      </p>
    </main>
  );
}