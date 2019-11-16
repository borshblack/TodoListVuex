<template>
  <v-card tile flat class="todo-item mb-1 pa-2">
    <v-layout>
      <v-card-title class="body-2 pl-1">{{task.text}}</v-card-title>
      <span class="todo-item__btn-times" @click="onRemoveItem">x</span>
    </v-layout>
    <v-layout>
      <v-chip v-for="(category, index) in task.categories"
               :key="index">
        {{category.type}}
      </v-chip>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'Todo-item',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onRemoveItem() {
      this.$store.commit('REMOVE_TASK', this.task.id);
    },
  },
};
</script>

<style lang="sass">
  .todo-item
    position: relative

    &__btn-times
      position: absolute
      top: 10px
      right: 10px

      color: gray
      cursor: pointer
</style>
