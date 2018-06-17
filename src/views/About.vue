<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter/>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue';

export default {
  name: 'about',
  components: {
    Counter,
  },
};
</script>
