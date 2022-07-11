<template>
  <article class="form-wrap">
    <form class="form">
      <FormInput
        v-for="(input, i) in inputs"
        :key="i"
        v-model="input.value"
        :name="input.name"
        :tag="input.tag"
        :description="input.description"
        :placeholder="input.placeholder"
        :required="input.required"
      />

      <FormButton
        @addToCatalog="addToCatalog"
      />
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
          value: ''
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
          value: ''
        },
        {
          name: 'price',
          tag: false,
          description: 'Цена товара',
          placeholder: 'Введите цену',
          required: true,
          value: ''
        }
      ]
    }
  },

  methods: {
    addToCatalog () {
      const newCard = this.getNewData()
      this.$emit('addToCatalog', newCard)
    },

    getNewData () {
      const newCard = {}
      this.inputs.forEach((item) => {
        newCard[`${item.name}`] = item.value
      })
      return newCard
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
