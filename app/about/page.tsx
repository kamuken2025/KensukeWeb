import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container">
      {/* Aboutページ固有の最小CSS（スマホで画像→文章に並び替え） */}
      <style>{`
        .overview{
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }
        .overviewText{
          flex: 1 1 520px;
          min-width: 280px;
        }
        .overviewImage{
          flex: 0 0 auto;
        }
        @media (max-width: 640px){
          .overview{
            flex-direction: column;
          }
          .overviewImage{
            order: -1;     /* 画像を上に */
            align-self: flex-start;
          }
        }
      `}</style>

      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">About</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          自己紹介 / Profile
        </p>
      </header>

      {/* Overview（画像＋文章） */}
      <section className="card" style={{ marginBottom: 18 }}>
        <h2 className="h2">Overview</h2>

        <div className="overview">
          <div className="overviewText">
            <p style={{ marginTop: 0 }}>
              私は、草地・農地を対象に、ドローン（UAV）や衛星画像、現地計測データを組み合わせて
              植生状態や生産性を「見える化」する研究・技術開発に取り組んでいます。
              画像解析・機械学習（深層学習を含む）を用いて、管理判断に役立つ地図や指標を提供することを目指しています。
            </p>
            <p className="muted" style={{ marginBottom: 0 }}>
              I work on UAV/satellite-based monitoring for grassland and agricultural systems, integrating field
              measurements with image analysis and machine learning to deliver actionable maps and indicators.
            </p>
          </div>

          <div className="overviewImage">
            <Image
              src="/profile_KK_20251003.jpg"
              alt="Kensuke Kawamura"
              width={170}
              height={210}
              style={{ borderRadius: 16, objectFit: "cover" }}
              priority
            />
            <p className="muted" style={{ marginTop: 8, marginBottom: 0, fontSize: 12 }}>
              Photo
            </p>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="card" style={{ marginBottom: 18 }}>
        <h2 className="h2">Focus areas</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>UAV / satellite remote sensing for vegetation mapping</li>
          <li>Biomass & forage diagnostics (e.g., sward height, yield-related indicators)</li>
          <li>AI/ML modeling for classification and prediction</li>
          <li>Decision support for pasture management and weed control</li>
        </ul>
      </section>

      {/* Selected outputs */}
      <section className="card" style={{ marginBottom: 18 }}>
        <h2 className="h2">Selected outputs</h2>
        <p style={{ marginTop: 0 }}>
          研究成果・資料・コードは、必要に応じて以下に整理していきます。
        </p>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>
            <b>Projects:</b> <Link href="/projects">/projects</Link>
          </li>
          <li>
            <b>Contact:</b> <Link href="/contact">/contact</Link>
          </li>
        </ul>
      </section>

      {/* Short bio */}
      <section className="card">
        <h2 className="h2">Short bio</h2>
        <p className="muted" style={{ marginTop: 0, marginBottom: 0 }}>
          帯広畜産大学 草地生態学研究室。草地生態系におけるフィールド調査とリモートセンシング技術を基盤とした教育・研究を進めています。
          産学連携や現場実装も視野に、衛星×UAV×AIによる草地診断の仕組みづくりを行っています。
        </p>
      </section>

      <footer className="footer">
        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}