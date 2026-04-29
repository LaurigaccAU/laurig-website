import SiteShell from '../components/SiteShell'

export default function Home() {
  return (
    <SiteShell>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '720px',
          background: 'linear-gradient(90deg, #fffaf5 0%, #f3eadf 100%)',
        }}
      >
        <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="signature" style={{ margin: 0, fontSize: 52 }}>Hey,</p>

          <h1 className="serif" style={{ fontSize: 86, lineHeight: 0.95, margin: '0 0 10px', fontWeight: 400 }}>
            I’m Laurig.
          </h1>

          <h2 style={{ color: '#d84a10', fontSize: 36, margin: '0 0 24px' }}>
            Accountant
          </h2>

          <p className="text">
            I help businesses and individuals stay organised, compliant and confident with accounting,
            bookkeeping, BAS/GST assistance, reconciliations, payroll support and compliance processes.
          </p>

          <div style={{ display: 'flex', gap: 28, alignItems: 'center', marginTop: 34 }}>
            <img src="/balmain-logo.jpg" alt="Balmain Accountants" style={{ height: 62 }} />
            <img src="/syft-logo.png" alt="SYFT Adviser" style={{ height: 62 }} />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
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
    </SiteShell>
  )
}
