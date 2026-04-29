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

        body {
          margin: 0;
          background: #f6f2ec;
          color: #171717;
          font-family: Arial, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          min-height: 100vh;
          background: #f6f2ec;
        }

        .nav {
          height: 86px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 56px;
          background: #fffaf5;
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .brand {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-size: 21px;
          font-weight: 700;
          margin: 0;
          font-family: Georgia, serif;
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
          gap: 34px;
          align-items: center;
          font-size: 15px;
        }

        .cta {
          background: #d84a10;
          color: white;
          padding: 14px 22px;
          border-radius: 6px;
          font-weight: 700;
        }

        .page {
          max-width: 1440px;
          margin: 0 auto;
          background: #fffaf5;
          min-height: calc(100vh - 86px);
        }

        .content {
          padding: 72px 64px;
        }

        .kicker {
          color: #d84a10;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 700;
        }

        .title {
          font-size: 70px;
          line-height: .98;
          letter-spacing: -.05em;
          font-weight: 400;
          margin: 16px 0 24px;
          font-family: Georgia, serif;
        }

        .text {
          font-size: 18px;
          line-height: 1.9;
          color: #444;
          max-width: 850px;
        }

        .serif {
          font-family: Georgia, serif;
        }

        .signature {
          font-family: "Brush Script MT", cursive;
          color: #d84a10;
          font-size: 54px;
          margin-top: 24px;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .card {
          background: white;
          border-radius: 10px;
          padding: 34px;
          border: 1px solid #eee3d8;
        }

        .footer {
          padding: 40px 64px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer small {
          color: #888;
          display: block;
          margin-top: 8px;
        }

        .footer-logos {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-logos img {
          max-height: 52px;
          object-fit: contain;
          background: transparent;
        }

        .tag {
          border: 1px solid #d84a10;
          border-radius: 999px;
          padding: 9px 18px;
          color: #d84a10;
          font-size: 12px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        @media(max-width: 900px) {
          .links {
            display: none;
          }

          .nav {
            padding: 0 24px;
          }

          .content {
            padding: 42px 24px;
          }

          .title {
            font-size: 46px;
          }

          .footer {
            padding: 28px 24px;
          }

          .grid-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <nav className="nav">
        <a href="/" className="brand">
          <p className="brand-title">Laurig G.</p>
          <p className="brand-sub">ACCOUNTANT</p>
        </a>

        <div className="links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}

          <a className="cta" href="/contact">
            Drop a message →
          </a>
        </div>
      </nav>

      <main className="page">{children}</main>

      <footer className="footer">
        <div>
          <strong>Laurig G.</strong>

          <small>
            Liability limited by a scheme approved under Professional Standards Legislation.
          </small>
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
