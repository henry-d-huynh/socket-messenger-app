<template>
  <div class="messages">
    <div
      v-for="(userMessage, uIndex) in userMessages"
      :key="uIndex"
      :class="'user_message ' + isOwner(userMessage)"
    >
      <span
        class="message"
        v-for="(message, mIndex) in getMessages(userMessage)"
        :key="uIndex + '-' + mIndex"
      >
        <span :class="'message_wrapper ' + getColour(userMessage)">
          {{ message }}
        </span>
      </span>
      <span class="name">{{ getName(userMessage) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userMessages() {
      return this.$store.getters.userMessages;
    },
  },
  methods: {
    getMessages(userMessage) {
      return userMessage.messages;
    },

    getColour(userMessage) {
      return userMessage.colour;
    },

    getName(userMessage) {
      return userMessage.name;
    },

    isOwner(userMessage) {
      const userId = this.$store.getters.userDetails.userId;
      return userId === userMessage.userId ? 'owner' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.messages {
  display: grid;
  grid-gap: 1em;
  grid-auto-rows: min-content;

  overflow-y: scroll;
  overflow-x: hidden;

  box-sizing: border-box;
  padding: 0 0.5em 2em 0.5em;
}

.messages::-webkit-scrollbar {
  display: none;
}

.user_message {
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 5px;
}

.message {
  max-width: 60vw;
}

.message_wrapper {
  display: inline-block;
  padding: 0.75em 1em;
  border-radius: 10px;
}

.name {
  padding-left: 1em;
}

.owner {
  .message {
    justify-self: flex-end;
  }

  .name {
    display: none;
  }
}

@media (min-width: 992px) {
  .messages {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
}
</style>
