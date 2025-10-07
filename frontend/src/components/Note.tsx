type NoteType = {
  id: number;
  name: string;
  subtitle: string;
  date: string;
};

type NoteProps = {
  note: NoteType;
  setNotes: React.Dispatch<React.SetStateAction<NoteType[] | null>>;
};

export default function Note({ note, setNotes }: NoteProps) {
  function handleDelete(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) {
    e.preventDefault();
    setNotes((prevNotes) =>
      prevNotes ? prevNotes.filter((note) => note.id !== id) : null
    );
  }
  return (
    <>
      <h2 className="text-2xl mb-2">{note.name}</h2>
      <p className="mb-2">{note.subtitle}</p>
      <p>
        <small>{note.date}</small>
        <div className="flex justify-end gap-3">
          <button className="bg-[var(--silver-lake-blue-color)] text-[var(--rich-black-color)] px-4 py-2 rounded-xl">
            Edit
          </button>
          <button
            className="bg-[var(--silver-lake-blue-color)] text-[var(--rich-black-color)] px-4 py-2 rounded-xl"
            onClick={(e) => handleDelete(e, note.id)}
          >
            Delete
          </button>
        </div>
      </p>
    </>
  );
}
