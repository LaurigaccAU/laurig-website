import SiteShell from '../../components/SiteShell'

const services = [
  'Bookkeeping',
  'BAS / GST support',
  'Payroll support',
  'Financial records and reconciliations',
  'Tax preparation support',
  'Client compliance support',
]

export default function ServicesPage() {
  return (
    <SiteShell>
      <div className="page-content">
        <span className="kicker">Services</span>
        <h1 className="title">Practical support across the accounting workflow.</h1>
        <p className="text">
          Reliable help for the essential accounting and compliance work that keeps businesses organised.
        </p>

        <div className="grid-3" style={{ marginTop: 30 }}>
          {services.map((service, index) => (
            <div className="card service-card" key={service}>
                       <div>
                <div className="service-name">{service}</div>
                <div className="service-copy">Professional, responsive and detail-focused support.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteShell>
  )
}
