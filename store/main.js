export const state = () => ({
  products: [],
  spinkit: true
})

const loadData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem('products')))
    }, 3000)
  })
}

export const getters = {
  getProducts (state) {
    return state.products
  },

  getSpinkit (state) {
    return state.spinkit
  }
}

export const mutations = {
  setCards (state, res) {
    res.forEach((item) => {
      state.products.push(item)
    })
  },

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
  },

  hideSpinKit (state) {
    state.spinkit = false
  }
}

export const actions = {
  async loadData (context) {
    try {
      const product = await loadData()
      if (product) {
        context.commit('setCards', product)
      } else {
        context.commit('setCards', [])
      }
      context.commit('hideSpinKit')
    } catch (error) {
      alert(error)
    }
  }
}
