<template>
  <v-card flat>
    <v-container>
      <v-layout row nowrap align-center>
        <v-flex>
          <v-text-field v-model="taskMessage"></v-text-field>
        </v-flex>
        <v-flex>
          <v-btn color="primary" @click="handleClick">Добавить</v-btn>
        </v-flex>
      </v-layout>
      <v-layout>
        <TodoCategories mode="panel"></TodoCategories>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import TodoCategories from './TodoCategories.vue';

export default {
  name: 'Todo-panel',
  data() {
    return {
      taskMessage: '',
    };
  },
  computed: {
    getCategories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    generateUniqueId() {
      return (Math.random() * 100) * this.taskMessage.length + Math.random() * 100;
    },
    handleClick() {
      const payload = {
        id: this.generateUniqueId(),
        text: this.taskMessage,
        categories: this.getCategories,
      };

      if (this.taskMessage) {
        this.$store.commit('ADD_TASK', payload);
      }
      if (this.getCategories) {
        this.$store.commit('UPDATE_FILTER_CATEGORIES', []);
      }

      this.taskMessage = '';
    },
  },
  components: {
    TodoCategories,
  },
};
</script>

<style scoped>

</style>
