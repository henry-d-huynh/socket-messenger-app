import { io } from "./node_modules/socket.io-client/dist/socket.io.esm.min.js";

const wsHost = "ws://socket-messenger-app-5zksr.ondigitalocean.app";

class App {
  constructor() {
    console.log("Connecting to socket");
    this._socket = io(wsHost);

    this._usersList = document.querySelector(".users_list");

    // Message input
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const messageEl = e.target.querySelector("input");
      if (!messageEl.value.trim()) return;
      this._socket.emit("on_message", messageEl.value);
      messageEl.value = "";
    });

    // Connected to socket
    this._socket.on("connect", () => {
      console.log(this._socket.id);
    });

    // Other users joined the chatroom
    this._socket.on("user_connected", (data) => {
      console.log(`🟢 User "${data.id}" has connected`);

      const messages = document.querySelector(".messages");
      const html = `<p class="status">🟢 "${data.id}" has connected to chatroom</p>`;
      messages.insertAdjacentHTML("beforeend", html);
    });

    // Other users disconnected
    this._socket.on("user_disconnected", (data) => {
      console.log(`🔴 User "${data.id}" has disconnected`);

      const messages = document.querySelector(".messages");
      const html = `<p class="status">🔴 "${data.id}" has disconnected</p>`;
      messages.insertAdjacentHTML("beforeend", html);
    });

    // List of active users in the chat
    this._socket.on("active-users", this.handleActiveUsers.bind(this));

    // New messages received
    this._socket.on("new_message", (message) => {
      const html = `
            <div class="message ${
              message.user_id === this._socket.id ? "owner" : ""
            }">
                <label>${message.user_id}</label>
                <p>${message.message}</p>
            </div>
        `;
      document.querySelector(".messages").insertAdjacentHTML("beforeend", html);
      this.updateScroll();
    });
  }

  handleActiveUsers(users) {
    console.log(users);
    const html = users
      .map((id) => `<li>${id === this._socket.id ? "🟢" : ""} ${id}</li>`)
      .join("");
    this._usersList.innerHTML = "";
    this._usersList.insertAdjacentHTML("afterbegin", html);
  }

  updateScroll() {
    const messagesEl = document.querySelector(".messages");
    if (
      messagesEl.scrollHeight - messagesEl.clientHeight - messagesEl.scrollTop >
      400
    )
      return;
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
}

const app = new App();
