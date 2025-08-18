import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import Contact from "./pages/ContactPage.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={
              <HomePage />} />
            <Route path="/dashboard" element={
              <DashboardPage />} />
            <Route path="/privacy-policy" element={
              <PrivacyPolicy />} />
            <Route path="/terms-of-service" element={
              <TermsOfService />} />
            <Route path="/contact" element={
              <Contact />} />
          </Route>
        </Routes>

      </div >
    </Router >
  );
}


export default App;