import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      {/* ページ固有の最小CSS（必要な分だけ） */}
      <style>{`
        .heroGrid{
          display:grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
          align-items: start;
        }
        .chips{
          display:flex;
          flex-wrap:wrap;
          gap:8px;
          margin-top:14px;
        }
        .chip{
          font-size:13px;
          padding:6px 10px;
          border:1px solid var(--line);
          border-radius:999px;
          background:#fafbf9;
          color: var(--text);
        }
        .ctaRow{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:16px;
        }
        .btn{
          display:inline-block;
          padding:10px 14px;
          border-radius:12px;
          border:1px solid var(--line);
          background: var(--panel);
          color: var(--text);
          text-decoration:none;
        }
        .btnPrimary{
          border-color: color-mix(in srgb, var(--accent) 25%, var(--line));
          background: color-mix(in srgb, var(--accent) 9%, var(--panel));
          color: var(--accent2);
        }
        .btn:hover{ text-decoration:none; filter: brightness(0.99); }
        .cards{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap:14px;
          margin-top:14px;
        }
        .profileBox{
          display:grid;
          grid-template-columns: 110px 1fr;
          gap:12px;
          align-items:start;
        }
        .profileImage{
          border-radius:16px;
          object-fit: cover;
        }
        .list{
          margin:10px 0 0;
          padding-left:18px;
        }
        .updates{
          margin:0;
          padding-left:18px;
        }
        @media (max-width: 860px){
          .heroGrid{ grid-template-columns: 1fr; }
          .cards{ grid-template-columns: 1fr; }
          .heroRight{ order: -1; }
        }
      `}</style>

      {/* HERO */}
      <section className="card">
        <div className="heroGrid">
          {/* 左：メイン */}
          <div>
            <h1 className="h1">Kensuke Kawamura</h1>
            <p className="muted" style={{ marginTop: 10, marginBottom: 0 }}>
              Remote sensing × AI × Grassland ecology
              <br />
              UAV / satellite imagery and field data to map vegetation and support decision-making.
            </p>

            <div className="chips" aria-label="keywords">
              <span className="chip">UAV / Drone</span>
              <span className="chip">Satellite</span>
              <span className="chip">Vegetation mapping</span>
              <span className="chip">Biomass / Forage</span>
              <span className="chip">Machine learning</span>
            </div>

            <div className="ctaRow">
              <Link className="btn btnPrimary" href="/about">About</Link>
			        <Link className="btn" href="/projects">Projects</Link>
			        <Link className="btn" href="/contact">Contact</Link>
			        <Link className="btn" href="/cv">CV</Link>
              <Link className="btn" href="/blog">Blog</Link>
            </div>
          </div>

          {/* 右：写真＋簡易プロフィール（スマホでは上に回り込む） */}
          <div className="card heroRight">
            <div className="profileBox">
              <Image
                src="/profile_KK_20251003.jpg"
                alt="Kensuke Kawamura"
                width={110}
                height={140}
                className="profileImage"
                priority
              />
              <div>
                <p style={{ margin: 0, fontWeight: 700 }}>Quick profile</p>
                <p className="muted" style={{ marginTop: 6, marginBottom: 0, fontSize: 13 }}>
                  草地・農地のモニタリングとAI解析を中心に、研究と現場実装の橋渡しを行っています。
                </p>
              </div>
            </div>

            <ul className="list">
              <li>UAV / satellite-based mapping</li>
              <li>Biomass & forage diagnostics</li>
              <li>Weed detection & management support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 研究の柱 */}
      <section style={{ marginTop: 18 }}>
        <h2 className="h2">What I do</h2>
        <div className="cards">
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Mapping</h3>
            <p className="muted" style={{ margin: 0 }}>
              UAV・衛星画像から植生区分や分布を地図化（草地・農地・雑草など）。
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Diagnostics</h3>
            <p className="muted" style={{ margin: 0 }}>
              草量・群落高・品質などの推定や区画別集計で管理判断を支援。
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Deployment</h3>
            <p className="muted" style={{ margin: 0 }}>
              現地条件に合わせた運用（観測設計、解析、レポート/指標化）を重視。
            </p>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section style={{ marginTop: 22 }}>
        <h2 className="h2">Updates</h2>
        <div className="card">
          <ul className="updates">
            <li>2026-03-09: Built my first Next.js + Vercel practice site.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Kensuke Kawamura | </span>
        <span className="muted">
          <Link href="/about">About</Link> · <Link href="/projects">Projects</Link> ·{" "}
          <Link href="/contact">Contact</Link>
        </span>
      </footer>
    </main>
  );
}