<template>
  <button @click="addTask">タスクを追加する</button>
</template>

<script>
// @ is an alias to /src
import Task from '@/domain/Task.js';

export default {
  name: 'task-register',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addTask() {
      const task = new Task('テスト', this.count++);
      this.$store.commit('addedTask', task);
    }
  },
};
</script>
