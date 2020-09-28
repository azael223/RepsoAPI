import express from "express";
import cors from "cors";
import {router} from "@routes/router"

const app = express();
app.use(cors());
app.use(router)
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.listen(8000, () => {
  console.log("Server started at port 8000");
});
