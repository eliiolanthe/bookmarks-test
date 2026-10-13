// app.js creates and configures the Express application (middleware, routes, error handler) and exports it.
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(helmet());
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/", apiLimiter, router);

app.use(errorHandler);

export default app;
