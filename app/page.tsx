import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, lineHeight: 1.7 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 34, margin: 0 }}>Kensuke Kawamura</h1>
        <p style={{ marginTop: 8, color: "#555" }}>
          Remote sensing × AI × Grassland ecology
        </p>

        <nav style={{ display: "flex", gap: 16, marginTop: 12 }}>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section style={{ marginBottom: 24 }}>
        <h2>What I do</h2>
        <ul>
          <li>UAV / satellite-based vegetation mapping</li>
          <li>Biomass & forage diagnostics using AI</li>
          <li>Field experiments & ecosystem monitoring</li>
        </ul>
      </section>

      <section>
        <h2>Updates</h2>
        <ul>
          <li>2026-03-09: Built my first Next.js + Vercel practice site.</li>
        </ul>
      </section>

      <footer style={{ marginTop: 40, color: "#777", fontSize: 14 }}>
        © {new Date().getFullYear()} Kensuke Kawamura
      </footer>
    </main>
  );
}