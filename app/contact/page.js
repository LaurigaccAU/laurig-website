import SiteShell from '../../components/SiteShell'

export default function ContactPage() {
  return (
    <SiteShell>
      <div
        className="page-content"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 48px',
          border: 'none',
          boxShadow: 'none',
          background: 'transparent'
        }}
      >
        <span className="kicker">Contact</span>

        <h1
          className="serif"
          style={{
            fontSize: '88px',
            lineHeight: '.95',
            margin: '10px 0 50px',
            border: 'none'
          }}
        >
          Let’s connect.
        </h1>

        <div
          style={{
            display: 'grid',
            gap: '22px',
            border: 'none'
          }}
        >
          <div
            className="card"
            style={{
              padding: '38px',
              borderRadius: '14px',
              background: '#fff',
              border: '1px solid #ece3d8',
              boxShadow: 'none'
            }}
          >
            <h3 style={{ fontSize: '22px', marginBottom: '18px' }}>
              Email
            </h3>

            <p style={{ fontSize: '18px' }}>
              laurig@balmainacc.com.au
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: '38px',
              borderRadius: '14px',
              background: '#fff',
              border: '1px solid #ece3d8',
              boxShadow: 'none'
            }}
          >
            <h3 style={{ fontSize: '22px', marginBottom: '18px' }}>
              Phone
            </h3>

            <p style={{ fontSize: '18px' }}>
              02 9555 88 00
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: '38px',
              borderRadius: '14px',
              background: '#fff',
              border: '1px solid #ece3d8',
              boxShadow: 'none'
            }}
          >
            <h3 style={{ fontSize: '22px', marginBottom: '18px' }}>
              LinkedIn
            </h3>

            <p style={{ fontSize: '18px' }}>
              linkedin.com/in/LaurigG
            </p>
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
