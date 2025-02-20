import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout/QuizLayout.tsx";
import QuizPage from "./Pages/QuizPage.tsx";
import ResultBadPage from "./Pages/ResultBadPage.tsx";
import ResultGoodPage from "./Pages/ResultGoodPage.tsx";
import StartPage from "./Pages/StartPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="quizpage" element={<QuizPage />} />
        <Route path="resultbadpage" element={<ResultBadPage />} />
        <Route path="resultgoodpage" element={<ResultGoodPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
