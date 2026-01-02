import { gates } from "../data/gates";

function ExitFinder() {
  const bestGate = gates.reduce((a, b) =>
    a.distance < b.distance ? a : b
  );

  return (
    <div className="card">
      <h2>Smart Exit Finder</h2>

      <div className="result">
        <p className="muted">Recommended Exit</p>
        <h3 style={{ margin: '6px 0' }}>{bestGate.name}</h3>
        <p>Distance: {bestGate.distance} meters</p>
        <p>Safe at night: <strong style={{ color: bestGate.safe ? 'var(--success)' : 'var(--warning)'}}>{bestGate.safe ? 'Yes' : 'Caution'}</strong></p>
      </div>
    </div>
  );
}

export default ExitFinder;
