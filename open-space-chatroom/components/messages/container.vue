<template>
  <div class="messages">
    <div
      class="user_message"
      v-for="(userMessage, uIndex) in userMessages"
      :key="uIndex"
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
  },
};
</script>

<style lang="scss" scoped>
.messages {
  display: grid;
  grid-gap: 1em;

  overflow: scroll;

  box-sizing: border-box;
  padding: 0 0.5em;
}

.user_message {
  display: grid;
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
</style>
