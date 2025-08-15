import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import Profile from "./pages/Profile.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={
            <LandingPage />} />
          <Route path="/dashboard" element={
            <DashboardPage />} />
          <Route path="/privacy-policy" element={
            <PrivacyPolicy />}/>
          <Route path="/terms-of-service" element={
            <TermsOfService />}/>
          <Route path="/profile" element={
            <Profile />}/>
            </Route>
      </Routes>

      </div >
    </Router >
  );
}


export default App;