import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import EligibilityPage from "./pages/EligibilityPage";
import ApplicationPage from "./pages/ApplicationPage";
import ApplicantsPage from "./pages/Applicants";
import Home from "./pages/Home";
import Process from "./pages/Process";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/eligibility" element={<EligibilityPage />} />
            <Route path="/application" element={<ApplicationPage />} />
            <Route path='/applicants' element={<ApplicantsPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
