import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import QuizPage from "./Pages/QuizPage.tsx";
import ResultGoodPage from "./Pages/ResultGoodPage.tsx";
import ResultPage from "./Pages/ResultPage.tsx";
import StartPage from "./Pages/StartPage.tsx";

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
