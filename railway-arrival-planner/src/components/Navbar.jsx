function Navbar({ setPage, page }) {
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

        <nav className="nav-actions" role="tablist" aria-label="Main">
          <button
            className={"nav-btn " + (page === "coach" ? "active" : "")}
            onClick={() => setPage("coach")}
            role="tab"
            aria-selected={page === "coach"}
          >
            Coach Guide
          </button>

          <button
            className={"nav-btn " + (page === "delay" ? "active" : "")}
            onClick={() => setPage("delay")}
            role="tab"
            aria-selected={page === "delay"}
          >
            Delay Planner
          </button>

          <button
            className={"nav-btn " + (page === "exit" ? "active" : "")}
            onClick={() => setPage("exit")}
            role="tab"
            aria-selected={page === "exit"}
          >
            Exit Finder
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
