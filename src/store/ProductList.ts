import { fetchProducts } from "../api";
import {
  DefineActions,
  DefineGetters,
  DefineMutations
} from "vuex-type-helper";
export interface State {
  products: Array<{
    id: number;
    name: string;
    price: number;
    stock: number;
  }>;
}

export interface Getters {
  getAllProducts: {};
}

export interface Mutations {
  SET_ITEMS: State
}
export interface Actions {
  FETCH_PRODUCTS: void
}

export const state: State = {
  products: []
};
export const getters: DefineGetters<Getters, State> = {
  getAllProducts: state => {
    return state.products;
  }
};
export const mutations: DefineMutations<Mutations, State> = {
  SET_ITEMS: (state, payload) => {
    state.products = payload.products;
  }
};
export const actions: DefineActions<Actions, State, Mutations, Getters> = {
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
