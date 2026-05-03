import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext";
import { ClerkProvider } from '@clerk/clerk-react';
import { ToastContainer } from "react-toastify"; // ✅ import
import "react-toastify/dist/ReactToastify.css";  // ✅ import

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your REACT_APP_CLERK_PUBLISHABLE_KEY to the .env file");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <GeneralContextProvider>
          <ToastContainer position="top-center" autoClose={3000} /> {/* ✅ এখানে */}
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </GeneralContextProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);