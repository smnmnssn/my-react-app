import { BrowserRouter, Route, Routes } from "react-router";
import QuizPage from "./pages/QuizPage.tsx";
import ResultPage from "./pages/ResultPage.tsx";
import StartPage from "./pages/StartPage.tsx";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="quizpage" element={<QuizPage />} />
      <Route path="resultpage" element={<ResultPage />} />
    </Routes>
  </BrowserRouter>
  )
}