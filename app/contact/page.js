import SiteShell from '../../components/SiteShell'

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="page-content">
        <span className="kicker">Contact</span>
        <h1 className="title">Let’s connect.</h1>

        <div className="contact-list" style={{ marginTop: 28 }}>
          <div className="card">
            <h3>Email</h3>
            <p>
              <a href="mailto:laurig@balmainacc.com.au">laurig@balmainacc.com.au</a>
            </p>
          </div>

          <div className="card">
            <h3>Phone</h3>
            <p>+61 4XX XXX XXX</p>
          </div>

          <div className="card">
            <h3>LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/LaurigG" target="_blank" rel="noreferrer">
                linkedin.com/in/LaurigG
              </a>
            </p>
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
