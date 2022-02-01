<template>
  <div class="settings">
    <button @click="toggleSettings">
      <font-awesome-icon :icon="icon" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSettings() {
      this.$store.dispatch('toggleMenu');
    },
  },
  computed: {
    icon() {
      if (this.$store.getters.currMenuState === '') return ['fas', 'cog'];
      return ['fas', 'caret-circle-up'];
    },
  },
};
</script>

<style lang="scss" scoped>
.settings {
  margin-left: auto;
  button {
    font-size: 2em;
    color: #00ffc2;

    background: none;
    border: none;
    cursor: pointer;
    transition: scale 200ms ease-in-out;
  }

  button:hover {
    scale: 1.1;
  }

  button:active {
    animation: spin 1s infinite linear;
    scale: 0.9;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
