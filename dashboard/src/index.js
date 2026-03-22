import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext"; // ✅ import করো

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralContextProvider> {/* ✅ এই দিয়ে wrap করো */}
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </GeneralContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
