import { coachTrends } from "../data/coachTrends";
import { useState } from "react";

function CoachGuide() {
  const [coach, setCoach] = useState("");
  const [result, setResult] = useState("");

  function handleCheck() {
    setResult(coachTrends[coach]);
  }

  return (
    <div style={styles.box}>
      <h2>Coach & Platform Preparation</h2>

      <select onChange={(e) => setCoach(e.target.value)}>
        <option value="">Select Coach</option>
        <option value="Sleeper">Sleeper</option>
        <option value="3AC">3AC</option>
        <option value="2AC">2AC</option>
      </select>

      <button onClick={handleCheck}>Get Guidance</button>

      {result && <p>{result}</p>}
    </div>
  );
}

const styles = {
  box: { padding: "20px" }
};

export default CoachGuide;
