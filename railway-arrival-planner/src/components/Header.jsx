import React from "react";

function Header() {
  return (
    <section className="header-hero">
      <div className="header-overlay">
        <div className="header-content">
          <h2>Welcome to Railway Arrival Planner</h2>
          <p>Plan arrivals, check delay impacts, and find the best and nearest  exit — fast.</p>
        </div>
      </div>
      <div className="header-image">
        <img
          src="https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/indianrailway1.jpg"
          alt="Indian Railways"
        />
      </div>
    </section>
  );
}

export default Header;
