import { useState } from "react";
import Note from "./Note";
import { Link } from "react-router";

type NoteType = {
  id: number;
  name: string;
  subtitle: string;
  date: string;
};

export default function Notes() {
  const [notes, setNotes] = useState<NoteType[] | null>([
    {
      id: 1,
      name: "SQL basics",
      subtitle: "SELECT, JOIN, WHERE, GROUP BY",
      date: "Oct 13, 2025",
    },
    {
      id: 2,
      name: "HTML",
      subtitle: "HyperText markup language",
      date: "Oct 14, 2025",
    },
    {
      id: 3,
      name: "CSS",
      subtitle: "Cascading Style Sheets",
      date: "Oct 15, 2025",
    },
    {
      id: 4,
      name: "JavaScript",
      subtitle: "Dynamicly typed, single threaded programming language",
      date: "Oct 17, 2025",
    },
    {
      id: 5,
      name: "React",
      subtitle: "JavaScript framework for creating User Interfaces",
      date: "Oct 21, 2025",
    },
    {
      id: 6,
      name: "Component",
      subtitle:
        "Building block of React - allows us to define the structure of UI",
      date: "Oct 23, 2025",
    },
    {
      id: 7,
      name: "JSX",
      subtitle: "JavaScript and XML",
      date: "Oct 27, 2025",
    },
  ]);
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
            <Note key={note.id} note={note} setNotes={setNotes} />
          </li>
        ))
      )}
    </ul>
  );
}
