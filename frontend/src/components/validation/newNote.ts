import * as Yup from "yup";

export const newNoteSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long"),
  content: Yup.string().min(3, "Content must be at least 3 characters long"),
});
