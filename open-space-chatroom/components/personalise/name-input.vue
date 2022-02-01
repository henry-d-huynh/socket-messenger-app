<template>
  <div class="input_field">
    <label for="name_input"> Display name </label>
    <input id="name_input" type="text" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input_field {
  label {
    display: block;
    margin-bottom: 0.5em;
  }

  input {
    width: 100%;
    height: 51px;
    background-color: black;
    border: none;
    color: white;
    padding: 1em;
    box-sizing: border-box;
    border-radius: 10px;

    font-size: 1em;
  }
}
</style>
