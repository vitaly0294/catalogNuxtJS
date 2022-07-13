<template>
  <main class="flex">
    <FormMain
      @showPopUp="showPopUp"
    />

    <ProductList
      v-if="productList"
    />

    <transition name="popup">
      <PopUp
        v-if="conditionPopUp"
      />
    </transition>

    <SpinKit
      v-if="spinKit"
    />
  </main>
</template>

<script>
export default {
  name: 'MainCatalog',

  data () {
    return {
      conditionPopUp: false,
      spinKit: true,
      productList: false
    }
  },

  mounted () {
    this.showSpinKit()
  },

  methods: {
    async showPopUp () {
      this.conditionPopUp = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
      } catch (error) {
        alert(error)
      }

      this.conditionPopUp = false
    },

    async showSpinKit () {
      try {
        await new Promise(resolve => setTimeout(resolve, 3000))
      } catch (error) {
        alert(error)
      }

      this.spinKit = false
      this.productList = true
    }
  }
}

</script>

<style lang="scss" scoped>
  .flex {
    position: relative;
    display: flex;
    align-items: flex-start;

    @media (max-width: 767px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    .popup-enter-active, .popup-leave-active {
      transition: all .5s ease;
    }

    .popup-enter, .popup-leave-to {
      transform: scale(0);
      opacity: 0;
    }
  }

</style>
