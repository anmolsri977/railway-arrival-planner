import { useState } from "react";

function DelayPlanner() {
  const [delayed, setDelayed] = useState("");
  const [connection, setConnection] = useState("");
  const [message, setMessage] = useState("");

  function checkImpact() {
    if (delayed >= connection) {
      setMessage("❌ You will miss your connection. Look for next available options.");
    } else {
      setMessage("✅ You can still catch your connection. Move quickly.");
    }
  }

  return (
    <div className="card">
      <h2>Delay Impact Planner</h2>

      <label className="label">Delayed Arrival Time</label>
      <input className="input" type="time" onChange={(e) => setDelayed(e.target.value)} />

      <label className="label">Connection Time</label>
      <input className="input" type="time" onChange={(e) => setConnection(e.target.value)} />

      <div style={{ marginTop: 12 }}>
        <button className="btn primary" onClick={checkImpact}>Check</button>
      </div>

      {message && <div className="result">{message}</div>}
    </div>
  );
}

const styles = {
  box: { padding: "20px" }
};

export default DelayPlanner;
