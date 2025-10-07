import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import { newNoteSchema } from "./validation/newNote";

interface FormValues {
  title: string;
  content: string;
}

export default function NewNote() {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <button className="bg-[var(--silver-lake-blue-color)] text-[var(--rich-black-color)] px-4 py-2 rounded-xl">
        Back to Notes
      </button>
      <div className="mx-auto py-8 flex-col">
        <h3 className="text-2xl underline underline-offset-4 mb-5">
          Create new Note
        </h3>
        <Formik
          initialValues={{
            title: "",
            content: "",
          }}
          validationSchema={newNoteSchema}
          onSubmit={(
            values: FormValues,
            { setSubmitting, resetForm }: FormikHelpers<FormValues>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
            }, 500);
          }}
        >
          <Form>
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              placeholder="Note title"
              className="rounded text-[var(--rich-black-color)] py-2 px-4 block w-full mb-4"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm mb-2"
            />

            <label htmlFor="content">Content</label>
            <Field
              id="content"
              name="content"
              placeholder="Enter note contnet"
              className="textarea text-[var(--rich-black-color)] textarea-bordered h-32 rounded py-2 px-4 block w-full mb-4"
            />
            <ErrorMessage
              name="content"
              component="div"
              className="text-red-500 text-sm mb-2"
            />

            <button
              className="bg-[var(--silver-lake-blue-color)] text-[var(--rich-black-color)] px-4 py-2 rounded-xl"
              type="submit"
            >
              Create Note
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
