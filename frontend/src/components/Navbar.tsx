export default function Navbar() {
  return (
    <header className="max-w-6xl p-5 flex justify-between items-center">
      <h1 className="text-3xl underline  underline-offset-4">Noteword</h1>
      <button className="bg-[var(--silver-lake-blue-color)] text-[var(--rich-black-color)] p-3 rounded-xl">
        + Add note
      </button>
    </header>
  );
}
