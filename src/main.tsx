import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <App /> // <StrictMode> cause double mounting and therefore double fetch of api questions
);

