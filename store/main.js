export const state = () => ({
  products: [],
  sort: 'none'
})

// const loadData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(JSON.parse(localStorage.getItem('products')))
//     }, 3000)
//   })
// }

export const mutations = {
  pushCard (state, newCard) {
    state.products.push(newCard)
  },

  removeCard (state, id) {
    state.products.splice(id, 1)
  },

  sortCards (state, unit = 'none') {
    if (unit === 'name') {
      state.products.sort((a, b) => {
        if (a.name > b.name) { return 1 }
        if (a.name < b.name) { return -1 }
        return 1
      })
    }

    if (unit === 'min') {
      state.products.sort((a, b) => a.price - b.price)
    }

    if (unit === 'max') {
      state.products.sort((a, b) => b.price - a.price)
    }
  }
}

// export const actions = {
//   async loadData () {
//     try {
//       const product = await loadData()
//       console.log(product)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
