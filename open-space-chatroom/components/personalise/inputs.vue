<template>
  <div class="personalise_inputs">
    <PersonaliseNameInput />
    <PersonaliseColourInput />
    <button class="save">Save</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.personalise_inputs {
  display: grid;
  grid-gap: 2em;
  margin: 2.5em 0 1em 0;
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

.save {
  background-color: #ff7a00;
}
</style>
