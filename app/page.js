import SiteShell from '../components/SiteShell'

export default function Home() {
  return (
    <SiteShell>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          minHeight: '760px',
        }}
      >
        <div style={{ padding: '68px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="kicker">Proud Balmain Accountants team member</span>
          <h1
            style={{
              fontSize: '106px',
              lineHeight: 0.9,
              margin: 0,
              letterSpacing: '-0.06em',
              fontWeight: 500,
            }}
          >
            Laurig G.
          </h1>
          <h2
            style={{
              fontSize: '42px',
              margin: '18px 0 0',
              fontWeight: 500,
              lineHeight: 1.08,
            }}
          >
            The Accountant
          </h2>

          <p className="text" style={{ maxWidth: 650, marginTop: 28 }}>
            Supporting businesses and individuals with accounting, bookkeeping, BAS/GST assistance,
            reconciliations, payroll support, and compliance processes.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 30 }}>
            <div style={{ paddingTop: 14, borderTop: '1px solid rgba(0,0,0,0.12)' }}>
              <span className="kicker" style={{ color: '#8a8a8a', marginBottom: 8 }}>Based in</span>
              <strong style={{ fontSize: 18 }}>Sydney, Australia</strong>
            </div>
            <div style={{ paddingTop: 14, borderTop: '1px solid rgba(0,0,0,0.12)' }}>
              <span className="kicker" style={{ color: '#8a8a8a', marginBottom: 8 }}>Current role</span>
              <strong style={{ fontSize: 18 }}>Balmain Accountants</strong>
            </div>
            <div style={{ paddingTop: 14, borderTop: '1px solid rgba(0,0,0,0.12)' }}>
              <span className="kicker" style={{ color: '#8a8a8a', marginBottom: 8 }}>Qualification</span>
              <strong style={{ fontSize: 18 }}>Master of Business (Accounting)</strong>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
            background: '#f3f1eb',
            borderLeft: '1px solid rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/laurig-half-body.png"
            alt="Laurig G."
            style={{
              width: '86%',
              maxWidth: 560,
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
      </section>
    </SiteShell>
  )
}
