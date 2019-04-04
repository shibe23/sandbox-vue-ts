import { fetchProducts } from "../api";

interface state {
  products: Array<{
    id: number
    name: string
    price: number
    stock: number 
  }>
}

export const state: state = {
  products: []
};
export const getters = {
  getAllProducts: state => {
    return state.products;
  }
};
export const mutations = {
  SET_ITEMS: (state, payload) => {
    state.products = payload.products;
  }
};
export const actions = {
  FETCH_PRODUCTS: async ({ commit }) => {
    const res = await fetchProducts();
    commit("SET_ITEMS", res.data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
