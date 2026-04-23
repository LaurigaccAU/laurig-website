export default function SiteShell({ children }) {
  const navLinks = [
    ['Home', '/'],
    ['About', '/about'],
    ['Services', '/services'],
    ['Experience', '/experience'],
    ['Qualifications', '/qualifications'],
    ['Contact', '/contact'],
  ]

  return (
    <div style={{ background: '#f5f4ef', minHeight: '100vh', fontFamily: 'Arial, sans-serif', color: '#171717' }}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f5f4ef; }
        a { color: inherit; text-decoration: none; }
        .page-shell { max-width: 1320px; margin: 0 auto; padding: 24px; }
        .frame {
          background: #faf9f6;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          min-height: calc(100vh - 48px);
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 22px 32px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          background: rgba(250,249,246,0.96);
          backdrop-filter: blur(8px);
          position: sticky;
          top: 0;
          z-index: 20;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e77c31;
          font-weight: 700;
          background: #fff;
        }
        .brand-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
        }
        .brand-sub {
          margin: 3px 0 0;
          color: #8a8a8a;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
        }
        .nav-links a {
          font-size: 14px;
          color: #555;
        }
        .nav-links a:hover {
          color: #e77c31;
        }
        .page-content {
          padding: 64px 64px 72px;
        }
        .kicker {
          color: #e77c31;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 16px;
          display: block;
        }
        .title {
          font-size: 64px;
          line-height: 1;
          letter-spacing: -0.05em;
          font-weight: 500;
          margin: 0 0 20px;
        }
        .text {
          font-size: 18px;
          line-height: 1.9;
          color: #5f5f5f;
          max-width: 860px;
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
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 28px;
        }
        .card h3 {
          margin-top: 0;
          font-size: 28px;
          line-height: 1.15;
          font-weight: 500;
        }
        .card p, .card li {
          color: #5f5f5f;
          font-size: 16px;
          line-height: 1.85;
        }
        .service-card {
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .service-num {
          color: #b5b5b5;
          font-size: 13px;
        }
        .service-name {
          font-size: 26px;
          line-height: 1.2;
          letter-spacing: -0.03em;
          font-weight: 500;
        }
        .footer {
          border-top: 1px solid rgba(0,0,0,0.08);
          padding: 24px 32px 18px;
        }
        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .tag {
          padding: 9px 14px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 999px;
          background: #fff;
          font-size: 12px;
          color: #666;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .footer-note {
          color: #8a8a8a;
          font-size: 13px;
          margin-top: 14px;
        }
        .contact-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 1000px) {
          .grid-2, .grid-3, .contact-list { grid-template-columns: 1fr; }
        }
        @media (max-width: 760px) {
          .nav { padding: 18px 20px; }
          .nav-links { display: none; }
          .page-content { padding: 34px 22px 40px; }
          .title { font-size: 44px; }
        }
      `}</style>

      <div className="page-shell">
        <div className="frame">
          <nav className="nav">
            <div className="brand">
              <div className="brand-mark">LG</div>
              <div>
                <p className="brand-title">Laurig G.</p>
                <p className="brand-sub">The Accountant</p>
              </div>
            </div>

            <div className="nav-links">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {children}

          <footer className="footer">
            <div className="footer-row">
              <div>
                <p className="brand-title" style={{ margin: 0 }}>Laurig G. · The Accountant</p>
                <p className="brand-sub">Balmain-inspired minimal style</p>
              </div>
              <div className="footer-tags">
                <span className="tag">IPA Associate</span>
                <span className="tag">IFA Associate</span>
                <span className="tag">NTAA</span>
                <span className="tag">SYFT Adviser</span>
              </div>
            </div>
            <div className="footer-note">
              Liability limited by a scheme approved under Professional Standards Legislation.
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
