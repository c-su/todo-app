import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    addedTask: (state, task) => {
      state.tasks.push(task);
    },
    removedTask: (state, index) => {
      state.tasks.splice(index, 1);
    },
  },
  actions: {

  },
});
