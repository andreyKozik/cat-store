import state from "../../../../TEST_ANDREY_VUE_2/src/store/modules/main/state"

export default {
  state: {
    addedProducts: [],
    counter: 0,
    addBasket: [],
    sum: 0
  },
  mutations: {
    addProduct(state, productData) {

      if(!state.addBasket.includes(productData.id)) {

        state.addedProducts.push(productData);
        state.counter =  state.addedProducts.length;
        state.addBasket.push(productData.id)
      }
      
      const addedProducts = JSON.stringify(state.addedProducts);
      const addBasket = JSON.stringify(state.addBasket);

      localStorage.setItem('listProductBasket', addedProducts);
      localStorage.setItem('counter', state.counter);
      localStorage.setItem('addBasket', addBasket);
    },
    deleteProductBasket(state, id) {
      state.addedProducts = state.addedProducts.filter((el) => {
        if(el.id !== id) {
          return el;
        } 
      })

      state.addBasket = state.addBasket.filter((el) => {
        if(el !== id) {
          return el;
        } 
      })

      state.counter > 0 ? state.counter-- : state.counter;

      const addedProducts = JSON.stringify(state.addedProducts);
      const addBasket = JSON.stringify(state.addBasket);

      localStorage.setItem('listProductBasket', addedProducts);
      localStorage.setItem('counter', state.counter);
      localStorage.setItem('addBasket', addBasket);
    },

    loadingProduct(state, localStorageData) {
      const listProductBasket = JSON.parse(localStorageData.listProductBasket);
      const addBasket = JSON.parse(localStorageData.addBasket);

      state.addedProducts = listProductBasket;
      state.addBasket = addBasket;
      state.counter = localStorageData.counter;
    },
    changeTotalSum(state, sumProduct) {
      state.addedProducts.forEach((el, i) => {
        if(el.id === sumProduct.id) {
          el.amount = sumProduct.amount;
          state.addedProducts.splice(i, 1, el);
        }
      });

      const addedProducts = JSON.stringify(state.addedProducts);
      localStorage.setItem('listProductBasket', addedProducts);
    }
  },
  actions: {

  },
  getters: {
    totalSum(state) {
      return state.addedProducts.reduce((previousValue, currentValue) =>  previousValue + currentValue.price * currentValue.amount, 0);
    }
  },
}