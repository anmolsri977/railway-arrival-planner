import React, { useState } from "react";

function Navbar({ setPage, page }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (p) => {
    setPage(p);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand" onClick={() => handleSelect("coach")}>
          <div className="brand-logo">🚆</div>
          <div className="brand-text">
            <h1>Railway Arrival Planner</h1>
            <small>Quick arrival & exit guidance</small>
          </div>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        <nav
          className={"nav-actions " + (open ? "open" : "")}
          role="tablist"
          aria-label="Main"
        >
          <button
            className={"nav-btn " + (page === "coach" ? "active" : "")}
            onClick={() => handleSelect("coach")}
            role="tab"
            aria-selected={page === "coach"}
          >
            Coach Guide
          </button>

          <button
            className={"nav-btn " + (page === "delay" ? "active" : "")}
            onClick={() => handleSelect("delay")}
            role="tab"
            aria-selected={page === "delay"}
          >
            Delay Planner
          </button>

          <button
            className={"nav-btn " + (page === "exit" ? "active" : "")}
            onClick={() => handleSelect("exit")}
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
