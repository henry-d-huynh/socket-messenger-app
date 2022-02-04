<template>
  <div class="container">
    <ModalError />
    <ModalSuccess />
    <ModalLoading v-if="!connected" />
    <ModalIntro v-else-if="showModalIntro" :socket="socket" />
    <main :class="{ blur: !verified }">
      <div id="navbar">
        <Navbar :socket="socket" />
      </div>
      <MessagesContainer />
      <ChatInput />
    </main>
  </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  name: 'IndexPage',
  data: () => ({
    socket: {},
    showModalIntro: false,
  }),
  computed: {
    connected() {
      return this.$store.getters['socket/isConnected'];
    },
    verified() {
      return this.$store.getters['socket/isVerified'];
    },
  },
  async created() {
    const localStorageExists = await this.$store.dispatch(
      'user/checkLocalStorage'
    );

    this.fetchedLocalStorage = true;

    this.socket = io('http://localhost:1337');

    this.socket.on('connect', () => {
      this.$store.dispatch('socket/socketConnected');

      if (localStorageExists) {
        const userDetails = this.$store.getters['user/getMyUserDetails'];
        // console.log(userDetails);
        userDetails.agree = true;
        this.socket.emit('create_user', userDetails);
      } else {
        this.showModalIntro = true;
      }
    });

    this.socket.on('verified', (userDetails) => {
      this.$store.dispatch('user/updateMyUser', userDetails);
      this.$store.dispatch('socket/userVerified');
      this.$store.commit('updateMyDetails', userDetails);
      this.showModalIntro = false;
    });

    this.socket.on('user_create_error', (message) => {
      this.$store.dispatch('error/showError', message);
      this.showModalIntro = true;
    });

    this.socket.on('active_users', (activeUsers) => {
      this.$store.commit('updateActiveUsers', activeUsers);
    });

    this.socket.on('user_update_success', (newUserDetails) => {
      this.$store.dispatch(
        'success/showModal',
        `Successfully updated your details`
      );

      this.$store.dispatch('user/updateMyUser', newUserDetails);
      this.$store.dispatch('menu/updateState', '');
    });

    this.socket.on('user_updated', (newUserDetails) => {
      this.$store.commit('userHasUpdated', newUserDetails);
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}

main {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: 71px 1fr min-content;
}

.blur {
  filter: blur(20px);
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
