import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import MaterialRouter from "./routes/MaterialsRouter";
import UserDataRouter from "./routes/UserRouter";
import ReviewRouter from "./routes/ReviewRoutes"

const bodyParser = require('body-parser')
const app: Application = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/material', MaterialRouter);
app.use('/api/userData', UserDataRouter);
app.use('/api/review', ReviewRouter);

app.get("/api", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  return res.status(200).json({
    message: "Welcome to C22-093 Backend API!",
  });
});

dotenv.config();
const portEnv = process.env.PORT;
const port: number | string = portEnv ?? 80;

app.listen(port, function () {
  console.log(`Server running on port ${port} ...`);
});

export default app;