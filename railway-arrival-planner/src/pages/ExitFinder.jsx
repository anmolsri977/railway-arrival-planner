import { gates } from "../data/gates";

function ExitFinder() {
  const bestGate = gates.reduce((a, b) =>
    a.distance < b.distance ? a : b
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Smart Exit Finder</h2>

      <p>Recommended Exit:</p>
      <h3>{bestGate.name}</h3>
      <p>Distance: {bestGate.distance} meters</p>
      <p>Safe at night: {bestGate.safe ? "Yes" : "Caution"}</p>
    </div>
  );
}

export default ExitFinder;
