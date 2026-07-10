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