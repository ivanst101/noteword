import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { NotesProvider } from "./context/NoteContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <App />
      </NotesProvider>
    </BrowserRouter>
  </StrictMode>
);
