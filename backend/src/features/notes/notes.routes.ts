import { Router } from "express"
import {
  deleteNoteController,
  getNotesController,
  createNoteController,
  updateNoteController
} from "./notes.controllers"

const router = Router()

router.get("/notes", getNotesController)

router.post("/notes", createNoteController)

router.delete("/notes/:id", deleteNoteController)

router.put("/notes/:id", updateNoteController)

export default router