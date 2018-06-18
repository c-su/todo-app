import Vue from 'vue';
import Router from 'vue-router';
import TaskList from './views/TaskList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/task-list',
      name: 'task-list',
      component: TaskList,
    },
  ],
});
