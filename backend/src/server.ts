import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(5000, "0.0.0.0", () => {
  console.log("Server live on port 5000")
})