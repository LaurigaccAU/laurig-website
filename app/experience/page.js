import SiteShell from '../../components/SiteShell'

export default function ExperiencePage() {
  return (
    <SiteShell>
      <section className="section">
        <p className="kicker">Experience</p>
        <h1 className="title">Currently working at Balmain Accountants.</h1>

        <p className="text">
          Supporting clients with practical accounting assistance, record maintenance, reconciliations,
          payroll support, tax preparation support, and compliance-related processes.
        </p>

        <div className="grid-2" style={{ marginTop: 36 }}>
          <div className="card">
            <h3>Accounting support</h3>
            <p>Bookkeeping, reconciliations, financial records and day-to-day client support.</p>
          </div>

          <div className="card">
            <h3>Compliance workflow</h3>
            <p>BAS/GST assistance, payroll support, tax preparation support and client compliance processes.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
