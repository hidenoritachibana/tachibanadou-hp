import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import Post from "./pages/Post.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CategoryList from "./pages/CategoryList.tsx";
import ArchiveList from "./pages/ArchiveList.tsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route element={<Layout />}>
            {/* "/" にアクセスされたら "/login" にリダイレクト
          <Route path="/" element={<Navigate to="/login" />} />
           */}
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/category/:name" element={<CategoryList />} />
            <Route path="/archive/:year/:month" element={<ArchiveList />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* メニュー共通化の実装
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<DashboardPage />} />}
          >
            <Route
              path="create"
              element={<PrivateRoute element={<InvoiceCreatePage />} />}
            />
          </Route>
           */}
          </Route>
        </Routes>

      </div>
    </Router>
  );
}


export default App;