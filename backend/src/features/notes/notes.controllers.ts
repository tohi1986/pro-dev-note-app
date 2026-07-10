import { Request, Response } from 'express'
import { getNotes, createNote } from './notes.services'
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