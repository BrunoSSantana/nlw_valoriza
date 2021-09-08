import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { router } from "./routes";

import "./database";
import { AppError } from "./errors/AppErros";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log('Server is running'));