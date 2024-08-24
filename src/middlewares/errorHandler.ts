// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";

export function ErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
}
