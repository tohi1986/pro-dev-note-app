import { api } from "./client"
import type { Note } from "../features/notes/types"

export async function getNotes(): Promise<Note[]> {
  const res = await api.get("/notes")
  return res.data
}

export async function createNote(data: {
  title: string
  content: string
}) {
  const res = await api.post("/notes", data)
  return res.data
}


export async function deleteNote(id: string) {
  const res = await api.delete(`/notes/${id}`)
  return res.data
}

export async function updateNote(data: {
  id: string
  title: string
  content: string
}) {
  const res = await api.put(`/notes/${data.id}`, {
    title: data.title,
    content: data.content,
  })

  return res.data
}