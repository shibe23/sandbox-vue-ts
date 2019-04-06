import Vue from "vue";
import Vuex from "vuex";
import ProductList from "@/store/ProductList";

Vue.use(Vuex);

export interface State {}

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

export const state: State = {};
export const getters: Getters = {};
export const mutations: Mutations = {};
export const actions: Actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    ProductList
  }
});
