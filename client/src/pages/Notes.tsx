import { useEffect, useState } from "react"
import type { Note } from "../features/notes/types"
import { getNotes, createNote } from "../api/notes"

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  async function loadNotes() {
    try {
      const data = await getNotes()
      console.log("DATA:", data)
      setNotes(data)
    } catch (err) {
      console.error("LOAD ERROR:", err)
    }
  }

  useEffect(() => {
    loadNotes()
  }, [])

  async function handleCreate() {
    try {
      setLoading(true)

      await createNote({
        title,
        content,
      })

      setTitle("")
      setContent("")
      await loadNotes()
    } catch (err) {
      console.error("CREATE ERROR:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-6 gap-6">

      {/* FORM */}
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
          disabled={loading}
          className="bg-lime-500 hover:bg-lime-400 text-black font-bold p-2 rounded"
        >
          {loading ? "Adding..." : "Add Note"}
        </button>
      </div>

      {/* NOTES LIST */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {notes.map((n) => (
          <div
            key={n.id}
            className="bg-black border border-gray-800 p-3 rounded-lg"
          >
            <p className="text-lime-400 font-bold">
              {n.title || "No title"}
            </p>
            <p className="text-gray-300">
              {n.content || "No content"}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}