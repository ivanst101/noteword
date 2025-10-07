import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import NewNote from "./components/NewNote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<NewNote />} />
    </Routes>
  );
}

export default App;
