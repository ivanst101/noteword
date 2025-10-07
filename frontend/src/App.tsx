import "./App.css";
import Navbar from "./components/Navbar";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <Navbar />
      {/* <Notes /> */}
      <NewNote />
    </>
  );
}

export default App;
