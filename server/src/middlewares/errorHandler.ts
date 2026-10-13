import { NextFunction, Request, Response } from "express";

export class AppError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  const status = err instanceof AppError ? err.status : 500;
  const message = err instanceof Error ? err.message : "Server Error";

  if (status >= 500) {
    console.error(err);
  }

  res.status(status).json({ message });
}
