import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./pages/LandingPage";
import GetRoutePage from "./pages/GetRoutePage";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/get-route" element={<GetRoutePage />} />
    </Routes>
  );
}

export default App;
