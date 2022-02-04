<template>
  <div class="personalise_inputs">
    <PersonaliseNameInput @input="nameInput" />
    <PersonaliseColourInput @colourChange="colourChange" />

    <button class="save" @click="onSubmit" :disabled="isDetailsChanged">
      Save
    </button>
  </div>
</template>

<script>
export default {
  props: {
    socket: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    name: '',
    colour: '',
  }),
  methods: {
    onSubmit() {
      const currentDetails = this.$store.getters['user/getMyUserDetails'];

      const updatedUserDetails = {
        name: this.name,
        colour: this.colour,
        userID: currentDetails.userID,
        sockets: currentDetails.sockets,
      };

      this.socket.emit('update_user', updatedUserDetails);
    },
    nameInput(name) {
      this.name = name;
    },
    colourChange(colour) {
      this.colour = colour;
    },
  },
  computed: {
    isDetailsChanged() {
      const currentDetails = this.$store.getters['user/getMyUserDetails'];

      return (
        currentDetails.name === this.name &&
        currentDetails.colour === this.colour
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.personalise_inputs {
  display: grid;
  grid-gap: 2em;
  margin-bottom: 1em;
}

button {
  border: none;
  color: white;
  padding: 0.8em;
  width: 100%;
  border-radius: 10px;
  font-size: 1em;

  cursor: pointer;
}

button:disabled {
  cursor: default;
  opacity: 0.5;
}

.save {
  background-color: #ff7a00;
}
</style>
