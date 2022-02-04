const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const state = require("./model");

const UsersView = require("./views/users");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const port = 1337;

io.on("connection", (socket) => {
  usersView = new UsersView(io, socket, state);

  socket.emit("active_users", state.activeUsers);

  socket.on("create_user", usersView.createUser.bind(usersView));

  socket.on("update_user", usersView.modifyUser.bind(usersView));

  socket.on("disconnect", usersView.removeUser.bind(usersView));
});

httpServer.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
