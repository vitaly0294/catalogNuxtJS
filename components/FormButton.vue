<template>
  <div>
    <button
      :class="button ? 'button button_active' : 'button'"
      @click.prevent="addToCatalog"
    >
      Добавить товар
    </button>
  </div>
</template>

<script>
export default {
  name: 'FormButton',

  props: {
    button: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    addToCatalog () {
      if (this.button) { this.$emit('addToCatalog') }
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    width: 100%;
    height: 36px;
    background: #EEEEEE;
    border: none;
    outline: none;
    border-radius: 10px;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #B4B4B4;

    transition: transform .1s ease;

    &_active {
      background: #7BAE73;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      color: #FFFFFF;
      cursor: pointer;

      &:active {
        transform: translateY(2px) !important;
      }

      &:hover {
        transform: scale(1.01);
      }

      &:focus {
        border: 1px solid black;
      }
    }
  }
</style>
