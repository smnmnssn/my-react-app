import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout/QuizLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="" element />
            <Route path="" element />
            <Route path="" element />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
