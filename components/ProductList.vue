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
        @addToCatalog="addToCatalog"
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
      products: [
        {
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },
        {
          link: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },
        {
          link: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },
        {
          link: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },
        {
          link: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
          name: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        }
      ]
    }
  },
  methods: {
    addToCatalog () {
      console.log(2)
    },

    removeCard (index) {
      console.log(index)
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
