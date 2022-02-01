<template>
  <nav>
    <div class="header">
      <UiLogo />

      <ButtonSettings />
    </div>
  </nav>
</template>

<script>
export default {};
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
</style>
