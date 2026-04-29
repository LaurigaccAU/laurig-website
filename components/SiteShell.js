// FINAL MULTI-PAGE WEBSITE PACK
// Use these files in GitHub.
// Structure:
// components/SiteShell.js
// app/layout.js
// app/page.js
// app/about/page.js
// app/services/page.js
// app/experience/page.js
// app/qualifications/page.js
// app/contact/page.js
// public/laurig-half-body.png
// public/balmain-logo.jpg
// public/syft-logo.png

// ------------------------------------------------------------
// components/SiteShell.js
// ------------------------------------------------------------

export default function SiteShell({ children }) {
  const links = [
    ['Home', '/'],
    ['About', '/about'],
    ['Services', '/services'],
    ['Experience', '/experience'],
    ['Qualifications', '/qualifications'],
    ['Contact', '/contact'],
  ]

  return (
    <div className="site">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f6f2ec; color: #171717; font-family: Arial, sans-serif; }
        a { color: inherit; text-decoration: none; }
        .site { min-height: 100vh; background: #f6f2ec; }
        .nav {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 56px;
          background: #fffaf5;
          border-bottom: 1px solid #e8ded2;
          position: sticky;
          top: 0;
          z-index: 20;
        }
        .brand-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 28px;
          font-weight: 400;
          margin: 0;
          letter-spacing: -0.03em;
        }
        .brand-sub {
          margin: 2px 0 0;
          font-size: 12px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #555;
        }
        .links {
          display: flex;
          align-items: center;
          gap: 32px;
          font-size: 15px;
        }
        .links a:hover { color: #d84a10; }
        .cta {
          background: #d84a10;
          color: white !important;
          padding: 14px 22px;
          border-radius: 6px;
          font-weight: 700;
        }
        .page {
          max-width: 1440px;
          margin: 0 auto;
          background: #fffaf5;
          min-height: calc(100vh - 82px);
        }
        .kicker {
          color: #d84a10;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 700;
          margin: 0 0 14px;
        }
        .serif { font-family: Georgia, 'Times New Roman', serif; }
        .signature {
          font-family: 'Brush Script MT', cursive;
          color: #d84a10;
          font-size: 62px;
          line-height: 1;
          margin-top: 28px;
        }
        .content { padding: 72px 64px; }
        .title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 68px;
          line-height: .98;
          letter-spacing: -.05em;
          font-weight: 400;
          margin: 0 0 24px;
        }
        .text {
          font-size: 18px;
          line-height: 1.9;
          color: #444;
          max-width: 850px;
          margin: 0 0 20px;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .card {
          background: rgba(255,255,255,.72);
          border: 1px solid #eadfd3;
          padding: 30px;
          border-radius: 8px;
        }
        .card h3 {
          margin: 0 0 16px;
          font-size: 26px;
          line-height: 1.15;
          font-weight: 500;
        }
        .card p, .card li {
          color: #444;
          font-size: 16px;
          line-height: 1.85;
        }
        .service-card {
          min-height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .service-name {
          font-size: 22px;
          line-height: 1.2;
          font-weight: 700;
        }
        .service-copy {
          font-size: 14px;
          color: #666;
          line-height: 1.75;
          margin-top: 10px;
        }
        .software-logo {
          height: 38px;
          max-width: 150px;
          object-fit: contain;
          margin-bottom: 14px;
        }
        .footer {
          background: #191919;
          color: white;
          padding: 34px 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer small {
          color: #aaa;
          display: block;
          margin-top: 8px;
        }
        .footer-logos {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .footer-logos img {
          max-height: 54px;
          object-fit: contain;
        }
        .tag {
          border: 1px solid #d84a10;
          border-radius: 999px;
          padding: 9px 18px;
          color: #fff;
          font-size: 12px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        @media(max-width: 950px) {
          .links { display: none; }
          .nav { padding: 0 24px; }
          .content { padding: 42px 24px; }
          .title { font-size: 46px; }
          .grid-2, .grid-3 { grid-template-columns: 1fr; }
          .footer { padding: 28px 24px; }
        }
      `}</style>

      <nav className="nav">
        <a href="/">
          <p className="brand-title">Laurig G.</p>
          <p className="brand-sub">Accountant</p>
        </a>

        <div className="links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="cta" href="/contact">Drop a message →</a>
        </div>
      </nav>

      <main className="page">{children}</main>

      <footer className="footer">
        <div>
          <strong>Laurig G. · Accountant</strong>
          <small>Proud member of the Balmain Accountants team</small>
          <small>Liability limited by a scheme approved under Professional Standards Legislation.</small>
        </div>

        <div className="footer-logos">
          <img src="/balmain-logo.jpg" alt="Balmain Accountants" />
          <img src="/syft-logo.png" alt="SYFT Adviser" />
          <span className="tag">IPA Associate</span>
          <span className="tag">IFA Associate</span>
          <span className="tag">NTAA</span>
        </div>
      </footer>
    </div>
  )
}
