import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="max-w-6xl mx-auto p-5 flex justify-between items-center">
      <h1 className="text-3xl underline  underline-offset-4">Noteword</h1>
      <Link to={"/create"}>
        <button className="bg-[var(--silver-lake-blue-color)] text-[var(--rich-black-color)] px-4 py-2 rounded-xl">
          + Add note
        </button>
      </Link>
    </header>
  );
}
