<template>
  <div :class="required ? 'item required-field' : 'item'">
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
        :class="error ? 'field warn_active' : 'field'"
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
      color: #49485E;
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

        background: #FFFEFB;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border: none;
        border-radius: 4px;

        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: #3F3F3F;

        &:focus {
          outline: 1px solid #DCDCDC;
        }

        &::placeholder {
          color: #B4B4B4;
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
      border: 1px solid #FF8484 !important;
      color: #FF8484 !important;
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
      color: #FF8484;
    }

    > p:before {
      content: '';
      position: absolute;
      top: 0;
      right: -4px;
      display: block;
      width: 4px;
      height: 4px;
      background: #FF8484;
      border-radius: 4px;
    }
  }
</style>
