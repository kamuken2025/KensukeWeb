import Link from "next/link";

export default function CvPage() {
  return (
    <main className="container">
      <style>{`
        .grid2{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .kv{
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 10px;
          margin: 0;
        }
        .kv dt{ color: var(--muted); }
        .kv dd{ margin: 0; }
        .list{
          margin: 0;
          padding-left: 18px;
        }
        .small{ font-size: 13px; }
        @media (max-width: 860px){
          .grid2{ grid-template-columns: 1fr; }
          .kv{ grid-template-columns: 1fr; }
        }
      `}</style>

      <header style={{ marginBottom: 18 }}>
        <h1 className="h1">CV</h1>
        <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
          履歴書（Web掲載内容をサイト用に整理）
        </p>
        <p className="muted small" style={{ marginTop: 6, marginBottom: 0 }}>
          Source: kamuken.boo.jp / cv.html（最終更新日: 2026-01-08）に基づく要約
        </p>
      </header>

      {/* Affiliation / Contact */}
      <section className="card" style={{ marginBottom: 14 }}>
        <h2 className="h2">Affiliation & Contact</h2>
        <dl className="kv">
          <dt>Affiliation</dt>
          <dd>帯広畜産大学 環境農学研究部門 環境生態学分野（准教授）</dd>

          <dt>Address</dt>
          <dd>〒080-8555 北海道帯広市稲田町西2-11</dd>

          <dt>Email</dt>
          <dd>kamuken(at)obihiro.ac.jp</dd>
        </dl>
      </section>

      {/* Education / Employment */}
      <section className="grid2" style={{ marginBottom: 14 }}>
        <div className="card">
          <h2 className="h2">Education</h2>
          <ul className="list">
            <li>1996-03 山口県立岩国高等学校 卒業</li>
            <li>2000-03 富山大学 理学部 生物圏環境学科 卒業（学士：理学）</li>
            <li>2002-03 岐阜大学大学院 農学研究科 修了（修士：農学）</li>
            <li>2005-03 岐阜大学大学院 連合農学研究科 修了（博士：農学）</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="h2">Employment</h2>
          <ul className="list">
            <li>2004-04–2006-03 岐阜大学流域圏科学研究センター JSPS特別研究員（DC2）</li>
            <li>2005-07–2006-03 AgResearch（NZ）客員研究員（Visiting Post-Doc Researcher）</li>
            <li>2006-04–2008-06 （独）農業環境技術研究所 JSPS特別研究員（PD）</li>
            <li>2007-10–2008-09 AgResearch（NZ）客員研究員（Visiting Post-Doc Researcher）</li>
            <li>2008-07–2016-03 広島大学大学院国際協力研究科 准教授</li>
            <li>2016-04–2022-03 国際農林水産業研究センター（JIRCAS）任期付研究員、主任研究員</li>
            <li>2022-04–現在 帯広畜産大学 准教授</li>
            <li>2024-10-07–現在 （兼務）次世代畜産技術実証センター</li>
          </ul>
        </div>
      </section>

      {/* Part-time teaching */}
      <section className="card" style={{ marginBottom: 14 }}>
        <h2 className="h2">Part-time teaching (selected)</h2>
        <ul className="list">
          <li>2012-04–2013-03 北里大学獣医学系研究科 非常勤講師</li>
          <li>2014-04–2014-09 新潟大学農学部 非常勤講師</li>
          <li>2014-04–2015-03 北里大学獣医学系研究科 非常勤講師</li>
          <li>2015-04–2015-09 鹿児島大学農学部 非常勤講師</li>
          <li>2020-10–2021-03 宮崎大学農学部 非常勤講師</li>
          <li>2022-04–2022-09 岐阜大学大学院自然科学技術研究科 非常勤講師</li>
        </ul>
      </section>

      {/* Societies / Roles */}
      <section className="grid2" style={{ marginBottom: 14 }}>
        <div className="card">
          <h2 className="h2">Societies</h2>
          <ul className="list">
            <li>日本草地学会（2001–現在）</li>
            <li>日本生態学会（1999–2014, 2022–現在）</li>
            <li>日本畜産学会（2010–2014, 2022–現在）</li>
            <li>日本写真測量学会（2001–現在）</li>
            <li>日本リモートセンシング学会（2001–現在）</li>
            <li>システム農学会（1999–現在）</li>
            <li>デジタル北海道（2022–現在）</li>
            <li>北海道ドローン協会（2022–現在）</li>
            <li>New Zealand Grassland Association（2005–現在）</li>
            <li>The British Grassland Society（2005–現在）</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="h2">Service / Roles</h2>
          <p className="muted small" style={{ marginTop: 0 }}>
            任期中
          </p>
          <ul className="list">
            <li>日本草地学会 評議員（2010-04–現在）</li>
            <li>日本草地学会 英文誌編集委員（2010-04–現在）</li>
            <li>日本草地学会 国際情報担当委員（2010-04–現在）</li>
            <li>システム農学会 企画委員長（2017-04–現在）</li>
          </ul>
          <p className="muted small" style={{ marginTop: 12 }}>
            任期終了
          </p>
          <ul className="list">
            <li>日本草地学会 企画委員（2011-04–2013-03）</li>
            <li>日本草地学会 編集幹事（2013-04–2015-03）</li>
            <li>日本生態学会中国四国支部会 庶務幹事（2010-04–2012-03）</li>
            <li>システム農学会 編集委員（2011-04–2017-03）</li>
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section className="card" style={{ marginBottom: 14 }}>
        <h2 className="h2">Awards (selected)</h2>
        <ul className="list">
          <li>2003-10 Young Author Award（ISPRS WG VII/6, Kyoto）</li>
          <li>2005-03 ベストポスター最優秀賞（日本草地学会大会）</li>
          <li>2006-03 ベストポスター最優秀賞（日本草地学会大会）</li>
          <li>2006-03 日本草地学会奨励賞</li>
          <li>2008-10 システム農学会優秀発表賞（北村賞）</li>
          <li>2008-05（共著）日本リモートセンシング学会優秀論文発表賞</li>
          <li>2009-11（共著）日本リモートセンシング学会学会賞</li>
          <li>2021-01（共著）日本草地学会 英文誌論文賞</li>
          <li>2021-03（共著）SATテクノロジー・ショーケース2021 ベスト異分野交流賞</li>
        </ul>
      </section>

      {/* Qualifications */}
      <section className="card">
        <h2 className="h2">Qualifications (selected)</h2>
        <ul className="list">
          <li>高等学校教諭一種免許状（理科）</li>
          <li>中学校教諭一種免許状（理科）</li>
          <li>第一種衛生管理者</li>
          <li>ITパスポート</li>
          <li>第三級陸上特殊無線技士</li>
          <li>無人航空従事者 3級 / 2級 / 1級（マルチコプター）</li>
        </ul>

        <p className="muted small" style={{ marginTop: 10, marginBottom: 0 }}>
          ※ 免許番号など細かな情報は、必要に応じて追記してください（公開範囲の調整に向きます）。
        </p>
      </section>

      <footer className="footer">
        <Link href="/">← Back to Home</Link>
        <span className="muted">
          · <Link href="/about">About</Link> · <Link href="/projects">Projects</Link> · <Link href="/contact">Contact</Link>
        </span>
      </footer>
    </main>
  );
}