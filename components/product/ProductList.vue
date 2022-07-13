<template>
  <article class="content-wrap">
    <transition-group name="list" class="items" tag="ul">
      <ProductCard
        v-for="(product, index) in products"
        :key="product.keyId"
        :link="product.link"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        @removeCard="removeCard(index)"
      />
    </transition-group>
  </article>
</template>

<script>
export default {
  name: 'ProductList',

  data () {
    return {
      products: this.$store.state.main.products,
      showProduct: false
    }
  },

  watch: {
    products (value) {
      localStorage.setItem('products', JSON.stringify(value))
    }
  },

  mounted () {
    const res = JSON.parse(localStorage.getItem('products'))
    if (res) {
      res.forEach((item) => {
        this.$store.commit('main/pushCard', item)
      })
    }
  },

  // created () {
  //   this.$store.dispatch('loadData')
  // },

  methods: {
    removeCard (id) {
      this.$store.commit('main/removeCard', id)
    }
  }
}

</script>

<style lang="scss" scoped>
  .content-wrap {
    margin: 16px 0;

    .items {
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 1439px) {
        justify-content: space-evenly;
      }
    }

    .list-enter-active {
      animation: list-in .5s;
    }

    .list-leave-active {
      animation: list-in .5s reverse;
    }

    @keyframes list-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    .list-move {
      transition: transform .5s ease;
    }
  }

</style>
