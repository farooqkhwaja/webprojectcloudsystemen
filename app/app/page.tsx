export default function Home() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "black",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px" }}>Hey, ik ben Farooq</h1>
        <p>Mijn website draait op Next.js + CI/CD pipeline</p>
      </div>
    </main>
  );
}
