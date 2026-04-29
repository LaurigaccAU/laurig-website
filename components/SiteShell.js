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

        html, body {
          margin: 0;
          padding: 0;
          background: #fffaf5;
          color: #171717;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          width: 100%;
          min-height: 100vh;
          background: #fffaf5;
        }

        .nav {
          height: 78px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 54px;
          background: #fffaf5;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .brand-title {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .brand-sub {
          margin: 2px 0 0;
          font-size: 12px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #555;
        }

        .links {
          display: flex;
          align-items: center;
          gap: 32px;
          font-size: 14px;
        }

        .links a:hover {
          color: #d84a10;
        }

        .cta {
          background: #d84a10;
          color: #fff !important;
          padding: 14px 22px;
          border-radius: 8px;
          font-weight: 700;
        }

        .page {
          width: 100%;
          min-height: calc(100vh - 78px);
          background: #fffaf5;
        }

        .section {
          width: 100%;
          padding: 76px 7vw;
        }

        .kicker {
          color: #d84a10;
          text-transform: uppercase;
          letter-spacing: .18em;
          font-size: 12px;
          font-weight: 700;
          margin: 0 0 14px;
        }

        .serif {
          font-family: Georgia, serif;
        }

        .title {
          font-family: Georgia, serif;
          font-size: clamp(44px, 5vw, 82px);
          line-height: .95;
          letter-spacing: -.05em;
          font-weight: 400;
          margin: 0 0 28px;
        }

        .text {
          font-size: 18px;
          line-height: 1.85;
          color: #333;
          max-width: 760px;
        }

        .signature {
          font-family: "Brush Script MT", cursive;
          color: #d84a10;
          font-size: 58px;
          line-height: 1;
          margin: 0;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .card {
          background: rgba(255,255,255,.74);
          border: 1px solid #eadfd3;
          border-radius: 14px;
          padding: 34px;
        }

        .card h3 {
          margin: 0 0 16px;
          font-size: 26px;
          line-height: 1.15;
        }

        .card p, .card li {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
        }

        .footer {
          background: #111;
          color: #fff;
          padding: 34px 54px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .footer small {
          display: block;
          margin-top: 8px;
          color: #aaa;
        }

        .footer-logos {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        .footer-logos img {
          height: 46px;
          width: auto;
          object-fit: contain;
        }

        .tag {
          border: 1px solid #d84a10;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 12px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        @media(max-width: 900px) {
          .nav {
            padding: 0 24px;
          }

          .links {
            display: none;
          }

          .section {
            padding: 48px 24px;
          }

          .grid-2,
          .grid-3 {
            grid-template-columns: 1fr;
          }

          .footer {
            padding: 30px 24px;
          }
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
          <img src="/balmain-logo.png" alt="Balmain Accountants" />
          <img src="/syft-logo.png" alt="SYFT Adviser" />
          <span className="tag">IPA Associate</span>
          <span className="tag">IFA Associate</span>
          <span className="tag">NTAA</span>
        </div>
      </footer>
    </div>
  )
}
