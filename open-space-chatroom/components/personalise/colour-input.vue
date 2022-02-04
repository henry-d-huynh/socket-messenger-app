<template>
  <div class="colours_input">
    <label>Message colour</label>

    <div class="colours_input__options">
      <div class="colours_input__buttons">
        <button
          v-for="colour in colours"
          :key="colour"
          :class="colour"
          @click="selectColour(colour)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colours: ['blue', 'pink', 'red', 'yellow'],
      selectedColour: 'blue',
      buttons: null,
    };
  },
  methods: {
    selectColour(colour) {
      this.selectedColour = colour;
      //  Iterates through all the colour selections buttons and toggles the selected class for the currently selected colour
      this.buttons.forEach((button) => {
        if (button.classList.contains(this.selectedColour))
          return button.classList.add('selected');

        button.classList.remove('selected');
      });

      this.$emit('colourChange', colour);
    },
  },
  mounted() {
    if (!this.$store.getters['socket/isVerified']) {
      this.selectedColour =
        this.colours[Math.trunc(Math.random() * this.colours.length)];
    } else {
      if (this.$store.getters['user/myUserColour'])
        this.selectedColour = this.$store.getters['user/myUserColour'];
    }

    this.buttons = this.$el.querySelectorAll('button');
    this.selectColour(this.selectedColour);
    this.$emit('colourChange', this.selectedColour);
  },
};
</script>

<style lang="scss" scoped>
.colours_input {
  width: 100%;

  label {
    padding-bottom: 0.5em;
    display: block;
  }

  .colours_input__options {
    height: 51px;
    background-color: black;
    border-radius: 10px;

    display: grid;
    place-items: center;

    .colours_input__buttons {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1em;

      button {
        width: 25px;
        height: 25px;
        border-radius: 1000px;
        border: none;
        cursor: pointer;
        transition: all 100ms ease-in-out;
      }

      button:active {
        width: 22px;
        height: 22px;
      }

      .selected {
        border: 2px solid white;
      }
    }
  }
}
</style>
