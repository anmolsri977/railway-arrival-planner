import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoachGuide from "./pages/CoachGuide";
import DelayPlanner from "./pages/DelayPlanner";
import ExitFinder from "./pages/ExitFinder";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("coach");

  return (
    <>
      <Navbar setPage={setPage} />

      <Header />

      <main className="app-content">
        <div className="page-container">
          {page === "coach" && <CoachGuide />}
          {page === "delay" && <DelayPlanner />}
          {page === "exit" && <ExitFinder />}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
