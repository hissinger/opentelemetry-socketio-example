import "./tracing-socketIoInstrument"; // OpenTelemetry 설정을 먼저 import 합니다.

import express from "express";
import http from "http";
import { Server } from "socket.io";
import { trace } from "@opentelemetry/api";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  const tracer = trace.getTracer("socket.io");

  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (message) => {
    io.emit("message", message); // 모든 클라이언트에게 메시지 전송
  });
});

server.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
