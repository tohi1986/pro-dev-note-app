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





export async function deleteNote(id: string) {
  const { data, error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)
    .select()

  if (error) {
    console.log("DELETE NOTE ERROR:", error)
    throw new Error(error.message)
  }

  return data
}




export async function updateNote(
  id: string,
  data: {
    title: string
    content: string
  }
) {

  const { data: note, error } = await supabase
    .from("notes")
    .update(data)
    .eq("id", id)
    .select()


  if (error) {
    console.log("UPDATE NOTE ERROR:", error)
    throw new Error(error.message)
  }


  return note
}