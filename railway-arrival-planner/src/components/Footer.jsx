import React from "react";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Railway Arrival Planner</div>
        <div className="footer-links">Images: add Indian railway images to <code>/public/assets</code></div>
      </div>
    </footer>
  );
}

export default Footer;
