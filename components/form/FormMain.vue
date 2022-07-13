<template>
  <article class="form-wrap">
    <form id="form" class="form">
      <FormInput
        v-for="(input, i) in inputs"
        :key="i"
        v-model.trim="input.value"
        :name="input.name"
        :tag="input.tag"
        :description="input.description"
        :placeholder="input.placeholder"
        :required="input.required"
        :error="input.error"
        @input="checkFiling(i)"
      />

      <FormButton
        :button="button"
        @addToCatalog="addToCatalog"
      />
      <!-- https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg -->
    </form>
  </article>
</template>

<script>
export default {
  name: 'FormMain',

  data () {
    return {
      inputs: [
        {
          name: 'name',
          tag: false,
          description: 'Наименование товара',
          placeholder: 'Введите наименование товара',
          required: true,
          value: '',
          error: false
        },
        {
          name: 'description',
          tag: true,
          description: 'Описание товара',
          placeholder: 'Введите описание товара',
          required: false,
          value: ''
        },
        {
          name: 'link',
          tag: false,
          description: 'Ссылка на изображение товара',
          placeholder: 'Введите ссылку',
          required: true,
          value: '',
          error: false
        },
        {
          name: 'price',
          tag: false,
          description: 'Цена товара',
          placeholder: 'Введите цену',
          required: true,
          value: '',
          error: false
        }
      ],

      button: false
    }
  },

  methods: {
    checkFiling (i) {
      let checkButton = true
      this.inputs[i].error = false
      this.inputs.forEach((input) => {
        if ((input.value === '' && input.required) || input.error) {
          checkButton = false
        }
      })
      this.button = checkButton
    },

    addToCatalog () {
      const newCard = this.getNewData()
      if (this.checkForm()) {
        this.$store.commit('main/pushCard', newCard)
        this.resetForm()
        this.button = false
        this.$emit('showPopUp')
      }
    },

    resetForm () {
      this.inputs.forEach((item) => {
        item.value = ''
      })
    },

    getRandomKey () {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    },

    getNewData () {
      const newCard = {}
      this.inputs.forEach((item) => {
        if (item.name === 'price') {
          item.value = item.value.replace(/\s/g, '')
        }
        newCard[`${item.name}`] = item.value
      })
      newCard.keyId = this.getRandomKey()
      return newCard
    },

    checkForm () {
      const res = []
      this.inputs.forEach((input) => {
        if (input.name === 'name') {
          if (this.validName(input)) { res.push(1) }
        }
        if (input.name === 'link') {
          if (this.validLink(input)) { res.push(1) }
        }
        if (input.name === 'price') {
          if (this.validPrice(input)) { res.push(1) }
        }
      })

      return (res.length === 0)
    },

    validName (input) {
      const pattern = /^[А-Яа-я]{2,}$/
      if (pattern.test(input.value)) {
        input.error = false
      } else {
        input.error = true
        this.button = false
      }
      return input.error
    },

    validLink (input) {
      const pattern = /(http|https):\/\/([\w.]+\/?)\S*/
      if (pattern.test(input.value)) {
        input.error = false
      } else {
        input.error = true
        this.button = false
      }

      return input.error
    },

    validPrice (input) {
      const pattern = /^[0-9]{1,}$/
      if (pattern.test(input.value)) {
        input.error = false
      } else {
        input.error = true
        this.button = false
      }

      return input.error
    }
  }
}

</script>

<style lang="scss" scoped>
  .form-wrap {
    position: sticky;
    top: 24px;
    margin: 16px;

    @media (max-width: 767px) {
      position: static;
    }

    .form {
      padding: 24px;
      width: 332px;
      background: #FFFEFB;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;

      @media (max-width: 374px) {
        width: 300px;
      }
    }
  }
</style>
