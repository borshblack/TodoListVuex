<template>
  <div class="todo-list primary">
    <Todo-item v-for="task in displayTask"
               :key="task.id"
               :task="task"></Todo-item>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TodoItem from './TodoItem.vue';

export default {
  name: 'Todo-list',
  computed: {
    ...mapState({
      tasks: 'tasks',
    }),
    ...mapGetters({
      filteredTasks: 'tasksByCategories',
    }),
    displayTask() {
      return this.filteredTasks.length !== 0 ? this.filteredTasks : this.tasks;
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
  .todo-list {
    height: 300px;
    overflow-y: scroll;
  }
</style>
