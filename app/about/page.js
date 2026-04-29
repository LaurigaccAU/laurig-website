import SiteShell from '../../components/SiteShell'

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="section">
        <p className="kicker">About me</p>
        <h1 className="title">A professional and approachable accounting presence.</h1>

        <p className="text">
          I enjoy helping clients feel more confident about the financial side of their business.
          My style is warm, detail-focused, and grounded in professionalism.
        </p>

        <p className="text">
          As part of the Balmain Accountants team in Sydney, I support individuals and businesses with
          bookkeeping, BAS/GST assistance, reconciliations, payroll support, tax preparation support, and
          client compliance processes.
        </p>
      </section>
    </SiteShell>
  )
}
