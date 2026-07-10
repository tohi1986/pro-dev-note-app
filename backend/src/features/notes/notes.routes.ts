import { Router } from 'express'
import { getNotesController } from './notes.controllers'
import { createNoteController } from './notes.controllers'

const router = Router()

router.get('/notes', getNotesController)


router.post("/notes", createNoteController)

export default router