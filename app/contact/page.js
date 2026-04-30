import SiteShell from '../../components/SiteShell'

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="section">
        <p className="kicker">Contact</p>
        <h1 className="title">Drop me a message, I’d love to hear from you.</h1>

        <p className="text">
          Whether you have a question, need support, or would like to connect through Balmain Accountants,
          I’d be happy to hear from you.
        </p>

       <img
  src="/signature.png"
  alt="Laurig Signature"
  className="contact-signature-img"
/>

        <div className="grid-2" style={{ marginTop: 42 }}>
          <div className="card">
            <h3>Email</h3>
            <p>laurig@balmainacc.com.au</p>
          </div>

          <div className="card">
            <h3>Phone</h3>
            <p>02 9555 88 00</p>
          </div>

          <div className="card">
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/LaurigG</p>
          </div>

          <div className="card">
            <h3>Office</h3>
            <p>Suite 6, 2A Booth Street<br />Balmain NSW 2041</p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
