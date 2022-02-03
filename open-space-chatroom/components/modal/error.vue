<template>
  <transition @after-enter="setTimeout">
    <div :class="{ error_message: true, flash: flash }" v-if="showError">
      {{ errorMessage }}
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    timeout: null,
    flash: false,
  }),
  methods: {
    setTimeout() {
      this.flash = true;

      setTimeout(() => {
        this.flash = false;
      }, 200);

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.$store.dispatch('error/hideError');
      }, 10000);
    },
  },
  computed: {
    errorMessage() {
      this.setTimeout();
      return this.$store.getters['error/errorMessage'];
    },
    showError() {
      return this.$store.getters['error/isErrorShowing'];
    },
  },
};
</script>

<style lang="scss" scoped>
.error_message {
  position: absolute;
  z-index: 30;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 80vw;

  color: white;
  background-color: rgb(149, 0, 0);

  padding: 1em 2em;
  box-sizing: border-box;

  border-radius: 10px;

  transition: all 200ms ease-in-out;
}

.flash {
  background-color: rgb(255, 55, 55);
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, -200%);
}
</style>
