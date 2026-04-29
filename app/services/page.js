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
      <section className="section">
        <p className="kicker">Services</p>
        <h1 className="title">Practical support across the accounting workflow.</h1>

        <p className="text">
          Reliable help for the essential accounting and compliance work that keeps businesses organised.
        </p>

        <div className="grid-3" style={{ marginTop: 36 }}>
          {services.map((service) => (
            <div className="card" key={service}>
              <h3>{service}</h3>
              <p>Professional, responsive and detail-focused support.</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
