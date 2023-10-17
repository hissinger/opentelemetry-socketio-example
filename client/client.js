const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to the server.");

  // 서버에 메시지를 전송하는 예제
  socket.emit("message", "Hello from Node.js client!");

  socket.on("message", (message) => {
    console.log("Received message:", message);
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server.");
});
