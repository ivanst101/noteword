import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { NotesProvider } from "./context/NoteContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <Toaster />
        <App />
      </NotesProvider>
    </BrowserRouter>
  </StrictMode>
);
