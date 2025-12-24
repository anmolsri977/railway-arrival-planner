function Navbar({ setPage }) {
  return (
    <nav style={styles.nav}>
      <h3>🚆 Railway Arrival Planner</h3>

      <div>
        <button onClick={() => setPage("coach")}>Coach Guide</button>
        <button onClick={() => setPage("delay")}>Delay Planner</button>
        <button onClick={() => setPage("exit")}>Exit Finder</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#1e293b",
    color: "white"
  }
};

export default Navbar;
