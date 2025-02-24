import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import QuizPage from "./pages/QuizPage.tsx";
import ResultGoodPage from "./pages/ResultGoodPage.tsx";
import ResultPage from "./pages/ResultPage.tsx";
import StartPage from "./pages/StartPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="quizpage" element={<QuizPage />} />
        <Route path="resultpage" element={<ResultPage />} />
        <Route path="resultgoodpage" element={<ResultGoodPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
