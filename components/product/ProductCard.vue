<template>
  <li class="item" tabindex="0">
    <img src="@/assets/images/delete.png" alt="Удалить товар" class="button-delete" @click="removeCard">
    <div class="item__img">
      <img :src="link" alt="Фото товара">
    </div>
    <section class="item__content">
      <h3 class="name">
        {{ name }}
      </h3>
      <p class="description">
        {{ description }}
      </p>
      <span class="price">{{ getPrice }}</span><span class="price"> руб.</span>
    </section>
  </li>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    link: {
      type: String,
      default: '/product.jpg'
    },
    name: {
      type: String,
      default: 'Наименование товара'
    },
    description: {
      type: String,
      default: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
    },
    price: {
      type: String,
      default: '1'
    },
    keyId: {
      type: String,
      default: ''
    }
  },

  computed: {
    getPrice () {
      return Number(this.price).toLocaleString()
    }
  },

  methods: {
    removeCard () {
      this.$emit('removeCard')
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes showButtonDeleteHover {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes hideButtonDeleteHover {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  .item {
    position: relative;
    margin-bottom: 16px;
    margin-right: 16px;
    width: 332px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    background: #FFFEFB;
    cursor: url('@/assets/images/cursor.svg'), pointer;
    opacity: .9;
    transition: opacity .5s ease;

    @media (max-width: 767px) {
      margin-right: 0;
    }

    @media (max-width: 374px) {
      width: 300px;
    }

    > .button-delete {
      position: absolute;
      top: -8px;
      right: -8px;
      display: none;
      padding: 8px;
      background: #FF8484;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;

      &:hover, &:focus {
        display: block;
      }
    }

    &:hover .button-delete {
      display: block;
      animation: showButtonDeleteHover .3s;
    }

    &:focus .button-delete {
      display: block;
      animation: showButtonDeleteHover .3s;
    }

    &:hover, &:focus {
      opacity: 1;
    }

    &__img {
      height: 200px;
      margin-bottom: 16px;
      border-radius: 4px 4px 0px 0px;
      background: #dad9d9;
      border-radius: 4px 4px 0px 0px;

      > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
      }
    }

    &__content {
      margin: 0 16px 24px 16px;
      color: #3F3F3F;

      > .name {
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #3F3F3F;
      }

      > .description {
        margin-bottom: 16px;
        height: 96px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        word-wrap: break-word;
        overflow-Y: hidden;

        &::-webkit-scrollbar {
          width: 0px;
        }

        &:hover {
          overflow-Y: auto;
        }
      }

      > .price {
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
</style>
