<template>
  <div :class="required ? 'item required-field' : 'item'">
    <p>{{ description }}</p>
    <label :for="name" class="label">
      <p>{{ placeholder }}</p>
      <textarea
        v-if="tag"
        :id="name"
        class="field textarea"
        type="text"
        @input="$emit('input', $event.target.value)"
      />
      <input
        v-else
        :id="name"
        class="field"
        type="text"
        @input="$emit('input', $event.target.value)"
      >
    </label>
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
    }
  },

  data () {
    return {
      value: ''
    }
  }

  // methods: {
  //   togglePlaceholder() {

  //   }
  // }
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
      }

      > p {
        position: absolute;
        top: 11px;
        left: 16px;
        color: #B4B4B4;
        cursor: text;
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

    &:after {
      content: 'Поле является обязательным';
      position: absolute;
      bottom: 4px;
      left: 0;
      display: none;
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
