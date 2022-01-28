const express = require("express");
const cors = require("cors");

const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let users = [];

const port = 1337;

const emitUsersList = (userId) => {
  if (!userId) return io.emit("active-users", users);

  users = users.filter((user) => user !== userId);
  io.emit("active-users", users);
};

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("socket.io");
});

io.on("connection", (socket) => {
  console.log(`${socket.id} has connected`);

  //  Add Connected user to state
  users.push(socket.id);
  emitUsersList();
  console.log(users);

  io.emit("user_connected", {
    id: socket.id,
  });

  socket.on("on_message", (message) => {
    const newMessage = {
      user_id: socket.id,
      message,
    };
    io.emit("new_message", newMessage);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user_disconnected", {
      id: socket.id,
    });

    // Remove user from state
    emitUsersList(socket.id);
    console.log(users);
    console.log(`${socket.id} has disconnected`);
  });
});

httpServer.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
