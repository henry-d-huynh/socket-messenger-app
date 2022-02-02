<template>
  <div class="intro_modal">
    <div class="overlay"></div>
    <div class="modal">
      <div class="container">
        <p class="intro_text">
          Welcome to Open Space Chatroom, this is an expiremental app.
        </p>
        <img
          src="~/assets/images/logo.png"
          alt="COVR Creative Logo"
          class="logo_img"
        />
        <div class="inputs">
          <strong>
            <p>To begin please enter your display name and message colour</p>
          </strong>
          <PersonaliseNameInput />
          <PersonaliseColourInput />

          <div class="agreement">
            <button id="agree_btn" @click="toggleAgreement">
              <font-awesome-icon
                :class="{ confirmed: agreementConfirmed }"
                :icon="['fas', 'check-circle']"
              />
            </button>
            <span>I confirm that I am 18+ years of age.</span>
          </div>

          <button id="submit_btn">Proceed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    agreementConfirmed: false,
  }),

  methods: {
    toggleAgreement() {
      this.agreementConfirmed = !this.agreementConfirmed;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro_modal {
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

  .container {
    display: grid;
    grid-auto-rows: min-content;
    grid-gap: 1em;
    place-items: center;

    max-width: 300px;

    .intro_text {
      text-align: center;
    }

    .logo_img {
      max-width: 150px;
      width: 100%;
      margin: 0 auto;
    }

    .inputs {
      display: grid;
      grid-gap: 1.5em;

      .agreement {
        display: grid;
        grid-template-columns: min-content 1fr;
        align-items: center;
        grid-gap: 1em;

        #agree_btn {
          background: none;
          border: none;

          color: rgba(255, 255, 255, 0.5);
          font-size: 1.5em;

          cursor: pointer;
        }

        #agree_btn:hover {
          color: rgba(255, 255, 255, 0.7);
        }

        .confirmed {
          color: #ffa800;
          border-radius: 1000px;
          outline: 3px solid #ffa800;
          background-color: white;
        }
      }

      #submit_btn {
        color: white;
        border-radius: 10px;
        text-align: center;
        font-size: 1em;
        padding: 1em;

        border: none;
        background-color: #209733;

        cursor: pointer;
      }

      #submit_btn:hover {
        background-color: lighten($color: #209733, $amount: 5);
      }
    }
  }
}

p {
  margin: 0;
}

@media (min-width: 992px) {
  .modal {
    max-width: 800px;
    max-height: 600px;
    border-radius: 20px;
  }
}
</style>
