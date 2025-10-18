import { createContext, useContext, useState, type ReactNode } from "react";

export type NoteType = {
  id: number;
  name: string;
  subtitle: string;
  date: string;
};

type NotesContextType = {
  notes: NoteType[] | null;
  setNotes: React.Dispatch<React.SetStateAction<NoteType[] | null>>;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<NoteType[] | null>([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
}
