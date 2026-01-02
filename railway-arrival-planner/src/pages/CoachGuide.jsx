import { coachTrends } from "../data/coachTrends";
import { useState } from "react";

function CoachGuide() {
  const [coach, setCoach] = useState("");
  const [result, setResult] = useState("");

  function handleCheck() {
    setResult(coachTrends[coach]);
  }

  return (
    <div className="card">
      <h2>Coach & Platform Preparation</h2>

      <label className="label">Select coach</label>
      <select className="input" onChange={(e) => setCoach(e.target.value)}>
        <option value="">Select Coach</option>
        <option value="Sleeper">Sleeper</option>
        <option value="3AC">3AC</option>
        <option value="2AC">2AC</option>
      </select>

      <div style={{ marginTop: 12 }}>
        <button className="btn primary" onClick={handleCheck}>Get Guidance</button>
      </div>

      {result && <div className="result">{result}</div>}
    </div>
  );
}

const styles = {
  box: { padding: "20px" }
};

export default CoachGuide;
