import express from "express";
import cors from "cors";
import notesRoutes from './features/notes/notes.routes'



const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // FE URL
app.use(express.json());



app.use('/api', notesRoutes)




// test ruta
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "backend radi" });
});

export default app;