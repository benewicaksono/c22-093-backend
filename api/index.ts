import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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