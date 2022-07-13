export const state = () => ({
  products: [],
  sort: 'none'
})

export const mutations = {
  pushCard (state, newCard) {
    state.products.push(newCard)
    // if (state.sort !== 'none') {
    //   this.sortCards(state, this.sort)
    //   console.log(121)
    // }
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
      // this.setSort(state, unit)
    }

    if (unit === 'min') {
      state.products.sort((a, b) => a.price - b.price)
    }

    if (unit === 'max') {
      state.products.sort((a, b) => b.price - a.price)
    }

    // resultsTable.sort((a, b) => a[0] - b[0]);
    // if (unit === 'name') {
    //   resultsTable.sort((a, b) => {
    //     if (a[1] > b[1]) return 1;
    //     if (a[1] < b[1]) return -1;
    //     if (a[1] === b[1]) return 1;
    //   });
    // }
    // if (unit === 'score') resultsTable.sort((a, b) => b[3] - a[3]);
  }
}
