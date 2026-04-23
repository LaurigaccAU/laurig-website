export default function Home() {
  const services = [
    'Bookkeeping',
    'BAS / GST support',
    'Payroll support',
    'Financial records and reconciliations',
    'Tax preparation support',
    'Client compliance support',
  ]

  const memberships = [
    'Associate Member (AIPA), Institute of Public Accountants',
    'Associate Member, Institute of Financial Accountants',
    'SYFT Adviser',
    'NTAA',
  ]

  const software = ['Xero', 'QuickBooks', 'HandiLedger', 'HandiTax', 'Excel']

  return (
    <div style={{ background: '#f5f4ef', color: '#171717', fontFamily: 'Arial, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f5f4ef; }
        a { color: inherit; }
        .page-shell { max-width: 1320px; margin: 0 auto; padding: 24px; }
        .frame {
          background: #faf9f6;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 22px 32px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          background: rgba(250,249,246,0.95);
          backdrop-filter: blur(8px);
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
          text-decoration: none;
          font-size: 14px;
          color: #555;
        }
        .nav-links a:hover { color: #e77c31; }
        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          min-height: 760px;
        }
        .hero-left {
          padding: 68px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-right {
          display: flex;
          align-items: end;
          justify-content: center;
          background: linear-gradient(180deg, #f0eee8 0%, #e5e1d8 100%);
          border-left: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .hero-right img {
          width: 86%;
          max-width: 560px;
          object-fit: contain;
          display: block;
        }
        .eyebrow {
          color: #e77c31;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
          display: block;
        }
        .hero-title {
          font-size: 106px;
          line-height: 0.9;
          margin: 0;
          letter-spacing: -0.06em;
          font-weight: 500;
        }
        .hero-subtitle {
          font-size: 42px;
          margin: 18px 0 0;
          font-weight: 500;
          line-height: 1.08;
        }
        .hero-text {
          max-width: 650px;
          font-size: 19px;
          line-height: 1.95;
          color: #5f5f5f;
          margin-top: 28px;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 42px;
        }
        .hero-stat {
          padding-top: 14px;
          border-top: 1px solid rgba(0,0,0,0.12);
        }
        .hero-stat span {
          display: block;
          font-size: 11px;
          color: #8a8a8a;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
        }
        .hero-stat strong {
          font-size: 18px;
          line-height: 1.5;
        }
        .section {
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .section-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
        }
        .section-side {
          padding: 52px 34px;
          border-right: 1px solid rgba(0,0,0,0.08);
        }
        .section-main {
          padding: 52px 34px;
        }
        .section-kicker {
          color: #e77c31;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
          display: block;
        }
        .section-title {
          font-size: 52px;
          line-height: 1.03;
          letter-spacing: -0.05em;
          margin: 0 0 16px;
          font-weight: 500;
        }
        .section-copy {
          font-size: 17px;
          line-height: 1.9;
          color: #5f5f5f;
          max-width: 500px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .service-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          min-height: 190px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .service-number {
          color: #b5b5b5;
          font-size: 13px;
        }
        .service-name {
          font-size: 26px;
          line-height: 1.2;
          letter-spacing: -0.03em;
          font-weight: 500;
        }
        .service-copy {
          font-size: 14px;
          color: #666;
          line-height: 1.75;
          margin-top: 10px;
        }
        .triple-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .triple-card {
          padding: 40px 30px;
          border-right: 1px solid rgba(0,0,0,0.08);
        }
        .triple-card:last-child { border-right: 0; }
        .card-kicker {
          color: #e77c31;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .card-title {
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -0.04em;
          font-weight: 500;
          margin: 0 0 16px;
        }
        .card-copy {
          font-size: 16px;
          line-height: 1.9;
          color: #5f5f5f;
        }
        .list {
          margin: 0;
          padding-left: 20px;
          color: #5f5f5f;
          line-height: 1.9;
          font-size: 16px;
        }
        .software-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .software-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding-bottom: 10px;
          font-size: 18px;
        }
        .software-row span:last-child {
          color: #9a9a9a;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .contact-card {
          padding: 34px 30px;
          border-right: 1px solid rgba(0,0,0,0.08);
        }
        .contact-card:last-child { border-right: 0; }
        .contact-label {
          color: #e77c31;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .contact-value, .contact-value a {
          font-size: 21px;
          line-height: 1.6;
          color: #171717;
          text-decoration: none;
        }
        .footer {
          border-top: 1px solid rgba(0,0,0,0.08);
          padding: 26px 30px 18px;
        }
        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
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
          margin-top: 16px;
        }
        @media (max-width: 1100px) {
          .hero, .section-grid, .triple-grid, .contact-grid { grid-template-columns: 1fr; }
          .hero-right, .section-side, .triple-card, .contact-card { border-left: 0; border-right: 0; }
          .hero-right { border-top: 1px solid rgba(0,0,0,0.08); }
          .section-side { border-right: 0; }
          .triple-card, .contact-card { border-bottom: 1px solid rgba(0,0,0,0.08); }
          .triple-card:last-child, .contact-card:last-child { border-bottom: 0; }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 760px) {
          .nav { padding: 18px 20px; }
          .nav-links { display: none; }
          .hero-left, .section-side, .section-main { padding: 34px 22px; }
          .hero-title { font-size: 72px; }
          .hero-subtitle { font-size: 32px; }
          .hero-stats, .services-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 38px; }
          .contact-value, .contact-value a { font-size: 18px; }
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
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#experience">Experience</a>
              <a href="#qualifications">Qualifications</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <section className="hero">
            <div className="hero-left">
              <div>
                <span className="eyebrow">Proud Balmain Accountants team member</span>
                <h1 className="hero-title">Laurig G.</h1>
                <h2 className="hero-subtitle">The Accountant</h2>
                <p className="hero-text">
                  Supporting businesses and individuals with accounting, bookkeeping, BAS/GST assistance,
                  reconciliations, payroll support, and compliance processes.
                </p>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <span>Based in</span>
                  <strong>Sydney, Australia</strong>
                </div>
                <div className="hero-stat">
                  <span>Current role</span>
                  <strong>Balmain Accountants</strong>
                </div>
                <div className="hero-stat">
                  <span>Qualification</span>
                  <strong>Master of Business (Accounting)</strong>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <img src="/laurig-half-body.png" alt="Laurig G." />
            </div>
          </section>

          <section id="about" className="section">
            <div className="section-grid">
              <div className="section-side">
                <span className="section-kicker">About Me</span>
                <h3 className="section-title">A professional and approachable accounting presence.</h3>
                <p className="section-copy">
                  I enjoy helping clients feel more confident about the financial side of their business. My style is
                  warm, detail-focused, and grounded in professionalism.
                </p>
              </div>
              <div className="section-main">
                <p className="section-copy" style={{ maxWidth: 760 }}>
                  As part of the Balmain Accountants team in Sydney, I support individuals and businesses with
                  bookkeeping, BAS/GST assistance, reconciliations, payroll support, tax preparation support, and client
                  compliance processes. I focus on making accounting tasks feel clearer, smoother, and well supported.
                </p>
              </div>
            </div>
          </section>

          <section id="services" className="section">
            <div className="section-grid">
              <div className="section-side">
                <span className="section-kicker">What I Do</span>
                <h3 className="section-title">Practical support across the accounting workflow.</h3>
                <p className="section-copy">
                  Reliable help for the essential accounting and compliance work that keeps businesses organised.
                </p>
              </div>
              <div className="section-main">
                <div className="services-grid">
                  {services.map((service, index) => (
                    <div className="service-card" key={service}>
                      <div className="service-number">0{index + 1}</div>
                      <div>
                        <div className="service-name">{service}</div>
                        <div className="service-copy">Professional, responsive and detail-focused support.</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="triple-grid">
            <div className="triple-card">
              <div className="card-kicker">Experience</div>
              <h3 className="card-title">Currently working at Balmain Accountants</h3>
              <p className="card-copy">
                Supporting clients with practical accounting assistance, record maintenance, reconciliations, payroll
                support, tax preparation support, and compliance-related processes.
              </p>
            </div>

            <div id="qualifications" className="triple-card">
              <div className="card-kicker">Qualifications & Memberships</div>
              <h3 className="card-title">Master of Business (Accounting)</h3>
              <p className="card-copy" style={{ marginBottom: 14 }}>Victoria University</p>
              <ul className="list">
                {memberships.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="triple-card">
              <div className="card-kicker">Software</div>
              <div className="software-list">
                {software.map((item) => (
                  <div className="software-row" key={item}>
                    <span>{item}</span>
                    <span>Tool</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="contact-grid">
            <div className="contact-card">
              <div className="contact-label">Email</div>
              <div className="contact-value">
                <a href="mailto:laurig@balmainacc.com.au">laurig@balmainacc.com.au</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-label">Phone</div>
              <div className="contact-value">+61 4XX XXX XXX</div>
            </div>
            <div className="contact-card">
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">
                <a href="https://www.linkedin.com/in/LaurigG" target="_blank" rel="noreferrer">
                  linkedin.com/in/LaurigG
                </a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-row">
              <div>
                <p className="brand-title" style={{ margin: 0 }}>Laurig G. · The Accountant</p>
                <p className="brand-sub">Balmain-inspired style</p>
              </div>
              <div className="footer-tags">
                <span className="tag">IPA Associate</span>
                <span className="tag">IFA Associate</span>
                <span className="tag">NTAA</span>
                <span className="tag">SYFT Adviser</span>
              </div>
            </div>
            <div className="footer-note">Liability limited by a scheme approved under Professional Standards Legislation.</div>
          </footer>
        </div>
      </div>
    </div>
  )
}
