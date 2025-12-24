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
    <div style={styles.box}>
      <h2>Delay Impact Planner</h2>

      <label>Delayed Arrival Time</label>
      <input type="time" onChange={(e) => setDelayed(e.target.value)} />

      <label>Connection Time</label>
      <input type="time" onChange={(e) => setConnection(e.target.value)} />

      <button onClick={checkImpact}>Check</button>

      {message && <p>{message}</p>}
    </div>
  );
}

const styles = {
  box: { padding: "20px" }
};

export default DelayPlanner;
