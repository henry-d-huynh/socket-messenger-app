<template>
  <div class="loading_modal">
    <div class="overlay"></div>
    <div class="modal">
      <div class="container">
        <font-awesome-icon :icon="['fad', 'spinner-third']" class="spinner" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading_modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal {
  overflow: scroll;
  scrollbar-width: none;

  position: relative;
  z-index: 20;
  background-color: rgba(36, 36, 36, 0.5);

  max-width: 100vw;
  max-height: 100vh;

  width: 100%;
  height: 100%;

  padding: 1em;
  box-sizing: border-box;

  display: grid;
  place-items: center;

  text-align: center;
}

h1 {
  color: #ffa800;
}

.spinner {
  font-size: 3em;
  animation: spin 300ms linear infinite;

  color: #ffa800;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.modal::-webkit-scrollbar {
  display: none;
}
</style>
