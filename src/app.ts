// src/app.ts
import express, { Express } from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./routes/routes";
import { ErrorHandler } from "./middlewares/errorHandler";

export function createApp(): Express {
  const app = express();

  app.use(bodyParser.json());

  // 도메인별 라우트 등록
  RegisterRoutes(app);

  // 에러 핸들링 미들웨어
  app.use(ErrorHandler);

  return app;
}
