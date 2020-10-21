import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { Router } from "./routes/index.routes";
import { connection } from "./db.connection";

const app = express();

connection
  .then(() => console.log("MongoDB:Connected"))
  .catch((err) => console.log(err));

/* Middlewares */
app.use(cors());
app.use(morgan("common"));
app.use(express.json())

app.use("/api", Router);

/* Server */
const config = {
  host: "localhost",
  port: 2021,
};

const home = (req: Request, res: Response) => {
  res.send("Hello World xd");
};

app.get("/", home);

app.listen(config.port, config.host, () => {
  console.log(`Server started at http://${config.host}:${config.port}/`);
});
