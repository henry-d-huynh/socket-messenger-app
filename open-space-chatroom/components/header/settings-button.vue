<template>
  <div class="settings">
    <button @click="toggleSettings">
      <font-awesome-icon :icon="['fas', 'cog']" />
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
  }

  button:hover {
    animation-duration: 1s;
    animation-name: spin;
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
