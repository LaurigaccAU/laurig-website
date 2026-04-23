export default function Home() {
  return (
    <div
      style={{
        padding: "60px",
        fontFamily: "Arial",
        background: "#f5f4ef",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "72px", marginBottom: "10px" }}>
        Laurig G.
      </h1>

      <h2 style={{ color: "#e77c31" }}>
        The Accountant
      </h2>

      <p
        style={{
          maxWidth: "700px",
          lineHeight: "1.8",
          fontSize: "20px",
          marginTop: "30px",
        }}
      >
        Proud member of the Balmain Accountants team,
        supporting businesses and individuals with
        bookkeeping, BAS/GST assistance, reconciliations,
        payroll support, and compliance processes.
      </p>

      <img
        src="/laurig-half-body.png"
        alt="Laurig"
        style={{
          width: "320px",
          marginTop: "40px",
          borderRadius: "20px",
        }}
      />
    </div>
  );
}
