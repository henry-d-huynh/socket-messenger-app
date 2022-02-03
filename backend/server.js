const { v4: randomId } = require("uuid");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const usersController = require("./controllers/usersController");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const port = 1337;

io.on("connection", (socket) => {
  console.log("==========");
  console.log(randomId());
  console.log(socket.id);

  socket.on("create_user", (userDetails) => {
    usersController.createUser(socket, userDetails);
  });
});

httpServer.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
