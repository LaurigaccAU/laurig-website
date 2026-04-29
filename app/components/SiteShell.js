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
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #f6f2ec;
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
          background: #f6f2ec;
        }

        .nav {
          height: 86px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          background: #f6f2ec;
          border-bottom: 1px solid #e8ddd0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .brand {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          margin: 0;
          font-size: 22px;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .brand-sub {
          margin: 2px 0 0;
          font-size: 12px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #666;
        }

        .links {
          display: flex;
          align-items: center;
          gap: 34px;
          font-size: 14px;
        }

        .cta {
          background: #d84a10;
          color: white;
          padding: 14px 22px;
          border-radius: 8px;
          font-weight: 700;
        }

        .page {
          width: 100%;
          min-height: calc(100vh - 86px);
          background: transparent;
        }

        .content {
          width: 100%;
          padding: 72px 48px;
        }

        .kicker {
          color: #d84a10;
          text-transform: uppercase;
          letter-spacing: .16em;
          font-size: 12px;
          font-weight: 700;
        }

        .serif {
          font-family: Georgia, serif;
        }

        .title {
          font-size: 72px;
          line-height: .95;
          letter-spacing: -.05em;
          margin: 14px 0 26px;
          font-weight: 500;
        }

        .text {
          font-size: 18px;
          line-height: 1.9;
          color: #333;
          max-width: 850px;
        }

        .footer {
          background: #111;
          color: white;
          padding: 38px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .footer small {
          display: block;
          margin-top: 8px;
          color: #aaa;
        }

        .footer-logos {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-logos img {
          height: 42px;
          width: auto;
          object-fit: contain;
          background: transparent;
        }

        .tag {
          border: 1px solid #d84a10;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 12px;
          color: white;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        @media(max-width: 900px) {

          .nav {
            padding: 0 24px;
          }

          .links {
            gap: 18px;
            font-size: 13px;
          }

          .content {
            padding: 48px 24px;
          }

          .title {
            font-size: 52px;
          }

          .footer {
            padding: 32px 24px;
          }
        }
      `}</style>

      <nav className="nav">
        <a href="/" className="brand">
          <p className="brand-title">Laurig G.</p>
          <p className="brand-sub">Accountant</p>
        </a>

        <div className="links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}

          <a className="cta" href="/contact">
            Drop a message →
          </a>
        </div>
      </nav>

      <main className="page">
        {children}
      </main>

      <footer className="footer">
        <div>
          <strong>Laurig G. · Accountant</strong>

          <small>
            Proud member of the Balmain Accountants team
          </small>

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
