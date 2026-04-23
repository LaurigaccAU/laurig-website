import SiteShell from '../../components/SiteShell'

const memberships = [
  'Associate Member (AIPA), Institute of Public Accountants',
  'Associate Member, Institute of Financial Accountants',
  'SYFT Adviser',
  'NTAA',
]

const software = ['Xero', 'QuickBooks', 'HandiLedger', 'HandiTax', 'Excel']

export default function QualificationsPage() {
  return (
    <SiteShell>
      <div className="page-content">
        <span className="kicker">Qualifications</span>
        <h1 className="title">Education, memberships and software.</h1>

        <div className="grid-2" style={{ marginTop: 28 }}>
          <div className="card">
            <h3>Education & Memberships</h3>
            <p>Master of Business (Accounting) — Victoria University</p>
            <ul>
              {memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Software</h3>
            {software.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(0,0,0,0.08)',
                  paddingBottom: 10,
                  marginBottom: 12,
                  fontSize: 18,
                }}
              >
                <span>{item}</span>
                <span style={{ color: '#9a9a9a', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Tool
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
