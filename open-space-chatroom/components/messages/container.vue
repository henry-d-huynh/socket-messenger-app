<template>
  <div class="messages" ref="main">
    <div
      v-for="(userMessage, uIndex) in userMessages"
      :key="uIndex"
      :class="'user_message ' + isOwner(userMessage)"
    >
      <span
        class="message"
        v-for="message in getMessages(userMessage)"
        :key="message.id"
      >
        <span :class="'message_wrapper ' + getColour(userMessage)">
          <p>{{ message.text }}</p>
        </span>
      </span>
      <span class="name">{{ getName(userMessage) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bottomScroll: true,
  }),
  computed: {
    userMessages() {
      return this.$store.getters.userMessages;
    },
  },
  methods: {
    scrollTop() {
      const mainEl = this.$refs.main;

      if (this.bottomScroll) return (mainEl.scrollTop = mainEl.scrollHeight);
    },

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
      const userId = this.$store.getters['user/myUserID'];
      return userId === userMessage.userID ? 'owner' : '';
    },
  },
  updated() {
    this.scrollTop();
  },
  mounted() {
    this.$el.addEventListener('scroll', () => {
      const mainEl = this.$refs.main;
      const scrollPos = mainEl.scrollTop + mainEl.offsetHeight;
      const scrollHeight = mainEl.scrollHeight;
      if (scrollHeight - scrollPos > 10) return (this.bottomScroll = false);

      this.bottomScroll = true;
    });

    window.addEventListener('resize', () => {
      this.scrollTop();
    });
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

  scrollbar-width: none;
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
  display: block;
  padding: 0.75em 1em;
  border-radius: 10px;
  p {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
  }
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
