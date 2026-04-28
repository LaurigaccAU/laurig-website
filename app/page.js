import SiteShell from './components/SiteShell'

export default function Home() {
  return (
    <SiteShell>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '760px',
          background: '#fffaf5',
        }}
      >
        <div style={{ padding: '72px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="kicker">Proud member of Balmain Accountants</p>

          <img
            src="/balmain-logo.jpg"
            alt="Balmain Accountants"
            style={{ width: 180, marginBottom: 24 }}
          />

          <h1 className="serif" style={{ fontSize: 92, lineHeight: 0.95, margin: 0, fontWeight: 400 }}>
            Laurig G.
          </h1>

          <h2 style={{ color: '#d84a10', fontSize: 36, margin: '16px 0 24px' }}>
            The Accountant
          </h2>

          <p className="text">
            Helping businesses and individuals stay organised, compliant and confident with accounting,
            bookkeeping, BAS/GST assistance, reconciliations, payroll support and compliance processes.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 34 }}>
            <div>
              <p className="kicker" style={{ color: '#777', marginBottom: 8 }}>Location</p>
              <strong>Suite 6, 2A Booth Street<br />Balmain NSW 2041</strong>
            </div>

            <div>
              <p className="kicker" style={{ color: '#777', marginBottom: 8 }}>Current role</p>
              <strong>Balmain Accountants</strong>
            </div>

            <div>
              <p className="kicker" style={{ color: '#777', marginBottom: 8 }}>Qualification</p>
              <strong>Master of Business<br />(Accounting)</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, marginTop: 36, alignItems: 'center' }}>
            <a className="cta" href="/contact">Drop a message →</a>
            <a
              href="https://www.linkedin.com/in/LaurigG"
              target="_blank"
              rel="noreferrer"
              style={{
                border: '1px solid #ddd',
                padding: '13px 18px',
                borderRadius: 6,
                background: '#fff',
                fontWeight: 700,
              }}
            >
              LinkedIn
            </a>
          </div>

          <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginTop: 34 }}>
            <img src="/balmain-logo.jpg" alt="Balmain Accountants" style={{ height: 58 }} />
            <img src="/syft-logo.png" alt="SYFT Adviser" style={{ height: 58 }} />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
            background: 'linear-gradient(90deg, #fffaf5 0%, #f2ebe2 100%)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/laurig-half-body.png"
            alt="Laurig G."
            style={{
              width: '86%',
              maxWidth: 560,
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid #eadfd3' }}>
        <div style={{ padding: '56px 64px', borderRight: '1px solid #eadfd3' }}>
          <p className="kicker">About me</p>
          <h2 className="serif" style={{ fontSize: 42, lineHeight: 1.05, fontWeight: 400 }}>
            A professional and approachable accounting presence.
          </h2>
          <p className="text">
            As part of the Balmain Accountants team in Sydney, I support individuals and businesses with
            bookkeeping, BAS/GST assistance, reconciliations, payroll support, tax preparation support and
            client compliance processes.
          </p>
        </div>

        <div style={{ padding: '56px 64px' }}>
          <p className="kicker">Welcome</p>
          <h2 className="serif" style={{ fontSize: 42, lineHeight: 1.05, fontWeight: 400 }}>
            Drop me a message, I’d love to help.
          </h2>
          <p className="text">
            Whether you have a question, need support, or want to explore how Balmain Accountants can assist,
            I’d be happy to connect.
          </p>
          <div className="signature">Laurig G.</div>
        </div>
      </section>
    </SiteShell>
  )
}
