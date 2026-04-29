import SiteShell from '../../components/SiteShell'

export default function QualificationsPage() {
  return (
    <SiteShell>
      <section className="section">
        <p className="kicker">Qualifications</p>
        <h1 className="title">Education, memberships and software.</h1>

        <div className="grid-2" style={{ marginTop: 36 }}>
          <div className="card">
            <h3>Education & Memberships</h3>
            <p><strong>Master of Business (Accounting)</strong> — Victoria University</p>

            <ul>
              <li>Associate Member (AIPA), Institute of Public Accountants</li>
              <li>Associate Member, Institute of Financial Accountants</li>
              <li>SYFT Adviser</li>
              <li>NTAA</li>
            </ul>
          </div>

          <div className="card">
            <h3>Software</h3>
            <p>Xero</p>
            <p>QuickBooks</p>
            <p>HandiLedger</p>
            <p>HandiTax</p>
            <p>Excel</p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
