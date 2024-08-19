import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import EligibilityPage from "./pages/EligibilityPage";
import ApplicationPage from "./pages/ApplicationPage";
import ApplicantsPage from "./pages/Applicants";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/eligibility" element={<EligibilityPage />} />
            <Route exact path="/application" element={<ApplicationPage />} />
            <Route exact path='/applicants' element={<ApplicantsPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
