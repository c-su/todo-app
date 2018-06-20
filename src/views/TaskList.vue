<template>
  <div class="name">
    <h1>タスク一覧ページ</h1>
    <TaskRegister/>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id">
        <TaskItem :task="task"/>
        <button @click="removeTask(index)">✘</button>
      </li>
    </ul>
  </div>
</template>

<script>
import TaskRegister from '@/components/TaskRegister.vue';
import TaskItem from '@/components/TaskItem.vue';
import Task from '@/domain/Task.js';

export default {
  name: 'task-list',
  components: {
    TaskItem,
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
    },
  },
};
</script>
