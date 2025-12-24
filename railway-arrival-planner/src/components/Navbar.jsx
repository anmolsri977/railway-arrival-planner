function Navbar({ setPage }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand" onClick={() => setPage("coach")}>
          <div className="brand-logo">🚆</div>
          <div className="brand-text">
            <h1>Railway Arrival Planner</h1>
            <small>Quick arrival & exit guidance</small>
          </div>
        </div>

        <nav className="nav-actions">
          <button className="nav-btn" onClick={() => setPage("coach")}>Coach Guide</button>
          <button className="nav-btn" onClick={() => setPage("delay")}>Delay Planner</button>
          <button className="nav-btn" onClick={() => setPage("exit")}>Exit Finder</button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
