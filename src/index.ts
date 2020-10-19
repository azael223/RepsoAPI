import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Router } from "./routes/index.routes";
import { connection } from "./db.connection";

const app = express();

connection()

/* Middlewares */
app.use(cors());
app.use(morgan("common"));

app.use("/api", Router);

/* Server */
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.listen(8000, () => {
  console.log("Server started at port 8000");
});
