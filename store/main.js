export const state = () => ({
  products: [
    {
      name: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10000'
    },
    {
      link: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      name: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10000'
    },
    {
      link: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      name: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10000'
    },
    {
      link: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      name: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10000'
    },
    {
      link: 'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      name: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10000'
    }
  ]
})

export const mutations = {
  pushCard (state, newCard) {
    state.products.push(newCard)
  },

  removeCard (state, index) {
    state.products.splice(index, 1)
  }
}
