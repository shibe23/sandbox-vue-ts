import { fetchProducts } from "../api";
export interface State {
  products: Array<{
    id: number;
    name: string;
    price: number;
    stock: number;
  }>;
}

export interface Context {
  commit: (name: string, payload?: any) => void;
}

export interface Getters {
  [key: string]: (state: State) => void;
}

export interface Mutations {
  [key: string]: (state: State, payload?: any) => void;
}
export interface Actions {
  [key: string]: (context: Context, payload?: any) => void;
}

export const state: State = {
  products: []
};
export const getters: Getters = {
  getAllProducts: state => {
    return state.products;
  }
};
export const mutations: Mutations = {
  SET_ITEMS: (state, payload) => {
    state.products = payload.products;
  }
};
export const actions: Actions = {
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
