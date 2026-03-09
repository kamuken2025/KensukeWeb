import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "28px 18px", lineHeight: 1.8 }}>
      <style>{`
        .hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 20px;
          align-items: start;
          padding: 22px;
          border: 1px solid #eee;
          border-radius: 18px;
          background: #fff;
        }
        .title { font-size: 34px; margin: 0; letter-spacing: 0.2px; }
        .subtitle { margin: 10px 0 0; color: #555; }
        .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
        .chip {
          font-size: 13px; padding: 6px 10px;
          border: 1px solid #e6e6e6; border-radius: 999px;
          background: #fafafa; color: #333;
        }
        .ctaRow { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
        .btn {
          display: inline-block; padding: 10px 14px; border-radius: 12px;
          border: 1px solid #e6e6e6; text-decoration: none; color: #222; background: #fff;
        }
        .btnPrimary { border-color: #cfe6d3; background: #f3fbf4; }

        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 16px; }
        .card { border: 1px solid #eee; border-radius: 16px; padding: 16px; background: #fff; }
        .card h3 { margin: 0 0 8px; font-size: 16px; }
        .muted { color: #666; }
        .section { margin-top: 22px; }
        .sectionTitle { margin: 0 0 10px; font-size: 18px; }
        .updates { border: 1px solid #eee; border-radius: 16px; padding: 14px 16px; background: #fff; }

        .profileBox { display: grid; grid-template-columns: 110px 1fr; gap: 12px; align-items: start; }
        .profileImage { border-radius: 16px; object-fit: cover; }
        .profileName { margin: 0; font-weight: 700; }
        .profileMeta { margin: 6px 0 0; color: #666; font-size: 13px; }
        .profileList { margin: 10px 0 0; padding-left: 18px; }

        .footer {
          margin-top: 34px; padding-top: 14px; border-top: 1px solid #eee;
          color: #777; font-size: 14px; display: flex; justify-content: space-between;
          flex-wrap: wrap; gap: 10px;
        }

        /* スマホでは右カラムを上（写真→プロフィール→本文）に回り込ませる */
        @media (max-width: 820px) {
          .hero { grid-template-columns: 1fr; }
          .cards { grid-template-columns: 1fr; }
          .heroRight { order: -1; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        {/* 左：メイン */}
        <div>
          <h1 className="title">Kensuke Kawamura</h1>
          <p className="subtitle">
            Remote sensing × AI × Grassland ecology
            <br />
            <span className="muted">
              UAV / satellite imagery and field data to map vegetation and support decision-making.
            </span>
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
              <p className="profileName">Quick profile</p>
              <p className="profileMeta">
                草地・農地のモニタリングとAI解析を中心に、研究と現場実装の橋渡しを行っています。
              </p>
            </div>
          </div>

          <ul className="profileList">
            <li>UAV / satellite-based mapping</li>
            <li>Biomass & forage diagnostics</li>
            <li>Weed detection & management support</li>
          </ul>
        </div>
      </section>

      {/* 3つの強み */}
      <section className="section">
        <h2 className="sectionTitle">What I do</h2>
        <div className="cards">
          <div className="card">
            <h3>Mapping</h3>
            <p className="muted" style={{ margin: 0 }}>
              UAV・衛星画像から植生区分や分布を地図化（草地・農地・雑草など）。
            </p>
          </div>
          <div className="card">
            <h3>Diagnostics</h3>
            <p className="muted" style={{ margin: 0 }}>
              草量・群落高・品質などの推定や区画別集計で管理判断を支援。
            </p>
          </div>
          <div className="card">
            <h3>Deployment</h3>
            <p className="muted" style={{ margin: 0 }}>
              現地条件に合わせた運用（観測設計、解析、レポート/指標化）を重視。
            </p>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="section">
        <h2 className="sectionTitle">Updates</h2>
        <div className="updates">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>2026-03-09: Built my first Next.js + Vercel practice site.</li>
          </ul>
        </div>
        <p className="muted" style={{ marginTop: 10 }}>
          ※ Updates は後で “News” ページ化（Markdown運用）もできます。
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Kensuke Kawamura</span>
        <span className="muted">
          <Link href="/about">About</Link> · <Link href="/projects">Projects</Link> ·{" "}
          <Link href="/contact">Contact</Link>
        </span>
      </footer>
    </main>
  );
}