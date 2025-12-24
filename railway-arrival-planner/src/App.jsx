import Navbar from "./components/Navbar";
import CoachGuide from "./pages/CoachGuide";
import DelayPlanner from "./pages/DelayPlanner";
import ExitFinder from "./pages/ExitFinder";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("coach");

  return (
    <>
      <Navbar setPage={setPage} />

      <main className="app-content">
        {page === "coach" && <CoachGuide />}
        {page === "delay" && <DelayPlanner />}
        {page === "exit" && <ExitFinder />}
      </main>
    </>
  );
}

export default App;
