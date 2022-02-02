<template>
  <main>
    <Navbar />
    <div></div>
    <MessagesContainer />
    <ChatInput />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: 71px 1fr min-content;
}
</style>
