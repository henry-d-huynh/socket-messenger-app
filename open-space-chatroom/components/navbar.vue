<template>
  <nav>
    <div class="header" ref="header">
      <HeaderLogo />

      <HeaderSettingsButton />
    </div>

    <PersonaliseInputs v-if="currState === 'personalise'" />

    <button class="viewUsers" v-if="currState !== ''">View active users</button>
  </nav>
</template>

<script>
export default {
  computed: {
    currState() {
      return this.$store.getters['menu/currState'];
    },
  },
  methods: {
    showActiveUsers() {},
  },
};
</script>

<style lang="scss" scoped>
nav {
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
