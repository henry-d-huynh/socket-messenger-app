<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Type a message..." v-model="text" />
  </form>
</template>

<script>
export default {
  data: () => ({
    text: null,
  }),
  props: {
    socket: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSubmit() {
      const userID = this.$store.getters['user/myUserID'];

      const message = {
        text: this.text,
        userID,
      };

      this.socket.emit('message_send', message);
      this.text = '';
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  box-sizing: border-box;
}

input {
  min-height: 53px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1em;

  color: white;
  background-color: #222222;
  border-radius: 15px;
  border: none;

  font-size: 1em;
}
</style>
