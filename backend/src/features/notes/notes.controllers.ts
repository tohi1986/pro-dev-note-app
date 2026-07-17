import { Request, Response } from 'express'
import { getNotes, createNote,deleteNote,updateNote } from './notes.services'
import { handleError } from '../../utils/handleError'

export async function getNotesController(req: Request, res: Response) {
  try {
    const notes = await getNotes()
    res.json(notes)
  } catch (error) {
    return handleError(res, error)
  }
}

export async function createNoteController(req: Request, res: Response) {
  const { title, content } = req.body

  const note = await createNote({ title, content })

  res.json(note)
}



export async function deleteNoteController(req: Request, res: Response) {
  try {
    const id = String(req.params.id)

    const note = await deleteNote(id)

    res.json(note)

  } catch (error) {
    return handleError(res, error)
  }
}




export async function updateNoteController(
  req: Request,
  res: Response
) {
  try {
    const id = String(req.params.id)

    const { title, content } = req.body

    const note = await updateNote(id, {
      title,
      content,
    })

    res.json(note)

  } catch (error) {
    return handleError(res, error)
  }
}