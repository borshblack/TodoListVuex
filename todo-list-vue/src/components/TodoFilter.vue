<template>
  <v-card class="mt-5">
    <h3>Filter</h3>
    <todo-categories mode="filter"></todo-categories>
  </v-card>
</template>

<script>
import TodoCategories from './TodoCategories.vue';

export default {
  name: 'Todo-filter',
  components: {
    TodoCategories,
  },
};
</script>

<style scoped>

</style>
