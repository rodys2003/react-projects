import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
