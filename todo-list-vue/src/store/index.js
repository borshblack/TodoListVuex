import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    categories: [],
    filterCategories: [],
    enabledCategories: [{
      id: 0,
      type: 'Food',
    }, {
      id: 1,
      type: 'Work',
    }, {
      id: 2,
      type: 'School',
    }],
  },
  getters: {
    tasksByCategories(state) {
      return state.tasks.filter(({ categories }) => (
        categories.filter(taskCategory => (
          state.filterCategories.filter(category => (
            taskCategory.type === category.type
          )).length !== 0
        )).length !== 0
      ));
    },
  },
  mutations: {
    ADD_TASK(state, payload) {
      state.tasks.push(payload);
    },
    REMOVE_TASK(state, id) {
      state.tasks = state.tasks.filter(({ id: taskId }) => (taskId !== id));
    },
    UPDATE_FILTER_CATEGORIES(state, payload) {
      if (payload.mode === 'filter') {
        state.filterCategories = payload.categories;
      } else {
        state.categories = payload.categories;
      }
    },
  },
});
