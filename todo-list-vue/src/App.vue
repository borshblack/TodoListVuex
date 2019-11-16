<template>
  <v-app class="app">
    <v-container>
      <v-layout justify-center>
        <v-flex xs6>
          <v-card class="pa-5">
            <v-card-title>TodoList by using Vuex</v-card-title>
            <TodoPanel></TodoPanel>
            <TodoList></TodoList>
            <TodoFilter></TodoFilter>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import TodoPanel from './components/TodoPanel.vue';
import TodoList from './components/TodoList.vue';
import TodoFilter from './components/TodoFilter.vue';

export default {
  name: 'App',
  components: { TodoFilter, TodoList, TodoPanel },
};
</script>

<style lang="scss">
</style>
