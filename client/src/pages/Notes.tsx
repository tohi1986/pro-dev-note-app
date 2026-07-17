import { useState } from "react";
import { useNotes } from "../features/notes/hooks/useNotes";
import { useCreateNote } from "../features/notes/hooks/useCreateNote";
import { useDeleteNote } from "../features/notes/hooks/useDeleteNote";
import { useUpdateNote } from "../features/notes/hooks/useUpdateNote";
import type { Note } from "../features/notes/types";

export default function Notes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const { data: notes = [], isLoading, error } = useNotes();

  const createMutation = useCreateNote();
  const deleteMutation = useDeleteNote();
  const updateMutation = useUpdateNote();


  if (isLoading) {
    return <p className="text-white">Loading notes...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error loading notes</p>;
  }


  async function handleCreate() {
    await createMutation.mutateAsync({
      title,
      content,
    });

    setTitle("");
    setContent("");
  }


  async function handleDelete(id: string) {
    await deleteMutation.mutateAsync(id);
  }


  function startEdit(note: Note) {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  }


  async function handleUpdate(id: string) {
    await updateMutation.mutateAsync({
      id,
      title,
      content,
    });

    setEditingId(null);
    setTitle("");
    setContent("");
  }


  return (
    <div className="min-h-screen text-white flex flex-col items-center p-6 gap-6">


      {/* CREATE FORM */}
      <div className="bg-gray-900 p-4 rounded-xl w-full max-w-md flex flex-col gap-3">

        <input
          className="p-2 rounded bg-black border border-gray-700"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="p-2 rounded bg-black border border-gray-700"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={handleCreate}
          className="bg-lime-500 hover:bg-lime-400 text-black font-bold p-2 rounded"
        >
          Add Note
        </button>

      </div>



      {/* NOTES LIST */}
      <div className="w-full max-w-md flex flex-col gap-3">

        {notes.map((n) => (

          <div
            key={n.id}
            className="bg-black border border-gray-800 p-3 rounded-lg"
          >

            {
              editingId === n.id ? (

                <>
                  <input
                    className="w-full p-2 mb-2 rounded bg-gray-900 border border-gray-700"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <input
                    className="w-full p-2 mb-2 rounded bg-gray-900 border border-gray-700"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />


                  <button
                    onClick={() => handleUpdate(n.id)}
                    className="bg-green-500 text-black px-3 py-1 rounded mr-2"
                  >
                    Save
                  </button>


                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-600 px-3 py-1 rounded"
                  >
                    Cancel
                  </button>

                </>

              ) : (

                <>

                  <p className="text-lime-400 font-bold">
                    {n.title || "No title"}
                  </p>

                  <p className="text-gray-300">
                    {n.content || "No content"}
                  </p>


                  <button
                    onClick={() => startEdit(n)}
                    className="mt-3 bg-blue-500 px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>


                  <button
                    onClick={() => handleDelete(n.id)}
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </>

              )
            }


          </div>

        ))}

      </div>

    </div>
  );
}