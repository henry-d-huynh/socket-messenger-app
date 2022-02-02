<template>
  <main>
    <div id="navbar">
      <Navbar />
    </div>
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

#navbar {
  position: relative;
}

@media (min-width: 992px) {
  main {
    grid-template-rows: 1fr min-content;
    grid-template-columns: 1fr 332px;
    grid-column-gap: 1em;
  }

  #navbar {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
</style>
