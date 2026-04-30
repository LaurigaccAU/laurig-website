import SiteShell from '../components/SiteShell'

export default function Home() {
  return (
    <SiteShell>
      <section
        style={{
          minHeight: '720px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'end',
          background: 'linear-gradient(90deg, #fffaf5 0%, #f3eadf 100%)',
          padding: '70px 7vw 0',
        }}
      >
        <div style={{ paddingBottom: '90px' }}>
         <p className="hero-hey">Hey,</p>

          <h1
            className="serif"
            style={{
              fontSize: 'clamp(70px, 7vw, 116px)',
              lineHeight: '.88',
              margin: 0,
              fontWeight: 400,
              letterSpacing: '-0.06em',
            }}
          >
            I’m Laurig.
          </h1>

          <h2
            style={{
              color: '#d84a10',
              fontSize: 38,
              margin: '18px 0 28px',
            }}
          >
            Accountant
          </h2>

          <p className="text">
            I help businesses and individuals stay organised, compliant and confident with accounting,
            bookkeeping, BAS/GST assistance, reconciliations, payroll support and compliance processes.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 28,
              marginTop: 38,
              flexWrap: 'wrap',
            }}
          >
            <img
              src="/balmain-logo.png"
              alt="Balmain Accountants"
              style={{
                height: 72,
                width: 'auto',
                objectFit: 'contain',
              }}
            />

            <div
              style={{
                height: 54,
                width: 1,
                background: '#dccfc2',
              }}
            />

            <img
              src="/syft-logo.png"
              alt="SYFT Adviser"
              style={{
                height: 76,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
            minHeight: '650px',
            overflow: 'hidden',
          }}
        >
          <img
            src="/laurig-half-body.png"
            alt="Laurig G."
            style={{
              width: '78%',
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
