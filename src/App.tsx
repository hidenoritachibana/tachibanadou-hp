import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import HomePage from "./pages/HomePage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import Contact from "./pages/ContactPage.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import CompanyProfile from "./pages/CompanyProfile.tsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={
              <HomePage />} />
            <Route path="/company-profile" element={
              <CompanyProfile />} />
             <Route path="/service" element={
              <ServicePage />} />
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