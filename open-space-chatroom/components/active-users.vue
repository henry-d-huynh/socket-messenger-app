<template>
  <div class="container">
    <p>Active users</p>
    <div class="active_users">
      <div class="user" v-for="user in users" :key="user">{{ user }}</div>
      <div class="user" v-for="user in users" :key="user + '2'">{{ user }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.activeUsers;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}

.active_users {
  display: grid;
  grid-gap: 1em;
  height: 340px;
  overflow-y: scroll;
  overflow-x: hidden;

  .user {
    display: grid;
    align-items: center;
    padding-left: 1em;
    height: 41px;
    background-color: #3a3a3a80;
    border-radius: 10px;
  }
}

.active_users::-webkit-scrollbar {
  display: none;
}

@media (min-width: 992px) {
  .active_users {
    height: 100%;
  }
}
</style>
