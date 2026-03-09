import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, lineHeight: 1.8 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ marginBottom: 6 }}>About</h1>
        <p style={{ margin: 0, color: "#555" }}>
          自己紹介 / Profile
        </p>
      </header>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 8 }}>Overview</h2>
        <p style={{ marginTop: 0 }}>
          私は、草地・農地を対象に、ドローン（UAV）や衛星画像、現地計測データを組み合わせて
          植生状態や生産性を「見える化」する研究・技術開発に取り組んでいます。
          画像解析・機械学習（深層学習を含む）を用いて、管理判断に役立つ地図や指標を提供することを目指しています。
        </p>
        <p style={{ color: "#555", marginBottom: 0 }}>
          I work on UAV/satellite-based monitoring for grassland and agricultural systems,
          integrating field measurements with image analysis and machine learning to deliver actionable maps and indicators.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 8 }}>Focus areas</h2>
        <ul style={{ marginTop: 0 }}>
          <li>UAV / satellite remote sensing for vegetation mapping</li>
          <li>Biomass & forage diagnostics (e.g., sward height, yield-related indicators)</li>
          <li>AI/ML modeling for classification and prediction</li>
          <li>Decision support for pasture management and weed control</li>
        </ul>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 8 }}>Selected outputs</h2>
        <p style={{ marginTop: 0 }}>
          研究成果・資料・コードは、必要に応じて以下に整理していきます。
        </p>
        <ul style={{ marginTop: 0 }}>
          <li>
            <span style={{ fontWeight: 600 }}>Projects:</span>{" "}
            <Link href="/projects">/projects</Link>
          </li>
          <li>
            <span style={{ fontWeight: 600 }}>Contact:</span>{" "}
            <Link href="/contact">/contact</Link>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 8 }}>Short bio (optional)</h2>
        <p style={{ marginTop: 0, color: "#555" }}>
          帯広畜産大学 草地生態学研究室。草地生態系におけるフィールド調査とリモートセンシング技術を基盤とした教育・研究を進めています。  
          産学連携や現場実装も視野に，衛星×UAV×AIによる草地診断の仕組みづくりを行っています。
        </p>
      </section>

      <footer style={{ color: "#777", fontSize: 14 }}>
        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}