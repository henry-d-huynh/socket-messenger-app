<template>
  <transition @after-enter="setTimeout">
    <div class="success_message" v-if="showModal">
      {{ successMessage }}
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    setTimeout() {
      setTimeout(() => {
        this.$store.dispatch('success/hideModal');
      }, 3000);
    },
  },
  computed: {
    successMessage() {
      this.setTimeout();
      return this.$store.getters['success/successMessage'];
    },
    showModal() {
      return this.$store.getters['success/isModalShowing'];
    },
  },
};
</script>

<style lang="scss" scoped>
.success_message {
  position: absolute;
  z-index: 30;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 80vw;

  color: white;
  background-color: #02a641;

  padding: 1em 2em;
  box-sizing: border-box;

  border-radius: 10px;

  transition: all 200ms ease-in-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, -200%);
}
</style>
