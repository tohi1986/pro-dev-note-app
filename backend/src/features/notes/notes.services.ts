import { supabase } from "../../config/supabase"
import type { CreateNoteInput } from "./notes"

export async function getNotes() {
  const { data, error } = await supabase
    .from("notes")
    .select("*")

  if (error) {
    console.log("GET NOTES ERROR:", error)
    throw new Error(error.message)
  }

  return data
}

export async function createNote(data: CreateNoteInput) {
  const { data: note, error } = await supabase
    .from("notes")
    .insert([data])
    .select()

  if (error) {
    console.log("CREATE NOTE ERROR:", error)
    throw new Error(error.message)
  }

  return note
}