<template>
  <div>
    <button
      :class="toggleClassButton"
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

  computed: {
    toggleClassButton () {
      return this.button ? 'button button_active' : 'button'
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
@import '@/assets/scss/_mixins.scss';

  .button {
    @include buttonMixin;
  }
</style>
