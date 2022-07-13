<template>
  <div :class="toggleClassRequired">
    <p>{{ description }}</p>
    <label :for="name" class="label">
      <textarea
        v-if="tag"
        :id="name"
        class="field textarea"
        type="text"
        :value="value"
        :placeholder="placeholder"
        @input="setListener"
      />
      <input
        v-else
        :id="name"
        :class="toggleClassWarn"
        type="text"
        :value="value"
        :placeholder="placeholder"
        @input="setListener"
      >
    </label>
    <span v-if="error" class="item-after">
      Поле является обязательным
    </span>
  </div>
</template>

<script>
export default {
  name: 'FormInput',

  model: {
    prop: 'value',
    event: 'input'
  },

  props: {
    name: {
      type: String,
      default: ''
    },
    tag: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    toggleClassRequired () {
      return this.required ? 'item required-field' : 'item'
    },

    toggleClassWarn () {
      return this.error ? 'field warn_active' : 'field'
    }
  },

  methods: {
    setListener (event) {
      this.replacePrice(event)
      const value = event.target.value
      this.$emit('input', value)
    },

    replacePrice (event) {
      if (event.target.id === 'price') {
        const str = event.target.value.replace(/\s/g, '')
        event.target.value = str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:last-child {
      margin-bottom: 8px;
    }

    > p {
      position: relative;
      margin-bottom: 4px;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: $colorInputDiscription;
    }

    > .label {
      position: relative;
      width: 100%;
      font-size: 12px;
      line-height: 15px;

      > .field {
        margin-bottom: 16px;
        padding: 0 16px;
        width: 100%;
        height: 36px;

        background: $backgroundInput;
        box-shadow: $boxShadowOne;
        border: none;
        border-radius: $borderRadius;

        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: #3F3F3F;

        &:focus {
          outline: 1px solid #DCDCDC;
        }

        &::placeholder {
          color: $colorPlaceholderInput;
        }
      }

      > .textarea{
        padding-top: 10px;
        height: 108px;
        resize: none;
      }
    }
  }

  .required-field {
    .warn_active {
      border: 1px solid $сolorInputWarn !important;
      color: $сolorInputWarn !important;
    }

    .item-after {
      position: absolute;
      bottom: 2px;
      left: 0;
      display: block;
      width: 100%;
      font-size: 8px;
      line-height: 10px;
      letter-spacing: -0.02em;
      color: $сolorInputWarn;
    }

    > p:before {
      content: '';
      position: absolute;
      top: 0;
      right: -4px;
      display: block;
      width: 4px;
      height: 4px;
      background: $сolorInputWarn;
      border-radius: $borderRadius;
    }
  }
</style>
