import Note from "./Note";
import { Link } from "react-router";
import { useNotes } from "../context/NoteContext";

export default function Notes() {
  const { notes } = useNotes();
  return (
    <ul className="list-none max-w-6xl mx-auto grid grid-cols-3 gap-5">
      {notes === null ? (
        <p>Loading</p>
      ) : notes?.length <= 0 ? (
        <div className="flex-row m-4">
          <p className="pb-4">There are no notes!</p>
          <Link to={"/create"}>
            <button className="bg-[var(--silver-lake-blue-color)] text-[var(--rich-black-color)] p-2 rounded-xl">
              Add a new note
            </button>
          </Link>
        </div>
      ) : (
        notes?.map((note) => (
          <li
            key={note.id}
            className="border m-4 p-4 rounded-lg shadow-[5px_3px_0px_1px_rgba(0,0,0,0.3)] shadow-blue-400 hover:shadow-[5px_8px_5px_rgba(0,0,0,0.3)] hover:shadow-blue-400 hover:translate-y-2 transition-transform ease-in"
          >
            <Note key={note.id} note={note} />
          </li>
        ))
      )}
    </ul>
  );
}
