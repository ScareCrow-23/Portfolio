import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ProjectsProvider } from "./context/ProjectContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProjectsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProjectsProvider>
);
