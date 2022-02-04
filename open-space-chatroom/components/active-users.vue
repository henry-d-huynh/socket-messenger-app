<template>
  <div class="container">
    <p>Active users ( {{ usersLength }} )</p>
    <div class="active_users">
      <div class="user" v-for="user in users" :key="getUserID(user)">
        {{ getUserName(user) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.activeUsers;
    },
    usersLength() {
      return this.$store.getters.activeUsersLength;
    },
  },
  methods: {
    getUserName(user) {
      return user.name;
    },
    getUserID(user) {
      return user.userID;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  height: 100%;
  grid-template-rows: min-content minmax(0, 1fr);
}

.active_users {
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: min-content;
  height: 340px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;

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
