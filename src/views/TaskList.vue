<template>
  <div class="name">
    <h1>タスク一覧ページ</h1>
    <TaskRegister/>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id">
        <TaskComp :task="task"/>
        <button @click="removeTask(index)">✘</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskRegister from '@/components/TaskRegister.vue';
import TaskComp from '@/components/Task.vue';
import Task from '@/domain/Task.js';

export default {
  name: 'task-list',
  components: {
    TaskComp,
    TaskRegister,
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    removeTask(index) {
      this.$store.state.tasks.splice(index, 1);
    }
  }
};
</script>
