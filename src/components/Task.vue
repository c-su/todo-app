<template>
  <div>
    <h2>{{ title + this.task.id }}</h2>
    <p>{{ status }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  computed: {
    title() {
      return this.task.getTitle();
    },
    status() {
      if (this.task.getStatus === 1) {
        return '完了';
      }
      return '未完了';
    },
  },
};
</script>
