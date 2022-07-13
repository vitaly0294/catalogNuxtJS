<template>
  <main class="flex">
    <FormMain
      @showPopUp="showPopUp"
    />

    <ProductList />

    <transition name="popup">
      <PopUp
        v-if="conditionPopUp"
      />
    </transition>

    <SpinKit
      v-if="spinkitUp"
    />
  </main>
</template>

<script>
export default {
  name: 'MainCatalog',

  data () {
    return {
      conditionPopUp: false,
      productList: false
    }
  },

  computed: {
    spinkitUp () {
      return this.$store.getters['main/getSpinkit']
    }
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
