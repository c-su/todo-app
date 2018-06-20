<template>
  <form @submit.prevent="addTask">
    <input type="text" v-model="title"/>
    <button type="submit" name="button">タスクを追加</button>
  </form>
</template>

<script>
// @ is an alias to /src
import Task from '@/domain/Task.js';

export default {
  name: 'task-register',
  data() {
    return {
      count: 0,
      title: '',
    };
  },
  methods: {
    addTask() {
      const task = new Task(this.title, ++this.count);
      this.$store.commit('addedTask', task);
    },
  },
};
</script>
