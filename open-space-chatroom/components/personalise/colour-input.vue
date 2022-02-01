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
      this.buttons.forEach((button) => {
        if (button.classList.contains(this.selectedColour))
          return button.classList.add('selected');

        button.classList.remove('selected');
      });
    },
  },
  mounted() {
    this.buttons = this.$el.querySelectorAll('button');
    this.selectColour(this.selectedColour);
  },
};
</script>

<style lang="scss" scoped>
.colours_input {
  width: 100%;

  .colours_input__options {
    height: 51px;
    background-color: black;
    border-radius: 10px;

    display: grid;
    place-items: center;

    .colours_input__buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1em;

      button {
        width: 25px;
        height: 25px;
        border-radius: 1000px;
        border: none;
        cursor: pointer;
      }

      .selected {
        border: 2px solid white;
      }

      /* Colours */
      .blue {
        background-color: #0047ff;
      }

      .pink {
        background-color: #df15cb;
      }

      .red {
        background-color: #ff3232;
      }

      .yellow {
        background-color: #ffa800;
      }
    }
  }
}
</style>
