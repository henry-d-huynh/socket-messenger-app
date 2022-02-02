<template>
  <nav>
    <div class="header" ref="header">
      <HeaderLogo />

      <HeaderSettingsButton />
    </div>

    <div class="container" v-if="currState">
      <PersonaliseInputs v-if="currState === 'personalise'" />

      <button class="viewUsers" v-if="currState" @click="toggleButton">
        {{ buttonText }}
      </button>

      <ActiveUsers v-if="currState === 'showActiveUsers'" />
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    currState() {
      return this.$store.getters['menu/currState'];
    },

    buttonText() {
      return this.$store.getters['menu/buttonText'];
    },
  },
  methods: {
    toggleButton() {
      this.$store.dispatch('menu/toggleButton');
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: absolute;

  width: 100%;
  min-height: 62px;
  border-radius: 20px;
  background-color: rgba($color: #262626, $alpha: 0.9);
  padding: 1em;
  box-sizing: border-box;

  .header {
    display: grid;
    grid-template-columns: 90px 1fr;
  }
}

.container {
  margin-top: 2em;
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

.viewUsers {
  background-color: #209733;
}
</style>
