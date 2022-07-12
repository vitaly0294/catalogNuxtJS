<template>
  <article class="content-wrap">
    <ul class="items">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :link="product.link"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        @removeCard="removeCard(index)"
      />
    </ul>
  </article>
</template>

<script>
export default {
  name: 'ProductList',

  data () {
    return {
      products: this.$store.state.main.products
    }
  },
  methods: {
    removeCard (index) {
      this.$store.commit('main/removeCard', index)
    }
  }
}

</script>

<style lang="scss" scoped>
  @keyframes buttonDeleteHover {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .content-wrap {
    margin: 16px 0;

    .items {
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 1439px) {
        justify-content: space-evenly;
      }
    }
  }

</style>
