// src/index.ts
import express from "express";
import { createApp } from "./app";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger/swagger.json"; // tsoa가 생성한 Swagger JSON 파일의 경로

const app = createApp();
const PORT = process.env.PORT || 3000;

// Swagger UI 설정
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
