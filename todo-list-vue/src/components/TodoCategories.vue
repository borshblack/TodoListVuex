<template>
  <v-layout>
    <v-checkbox v-for="(category, index) in categories"
                :key="index"
                :label="category.type"
                :value="category"
                @change="handleChangeCategories"
                v-model="filterCategories"></v-checkbox>
  </v-layout>
</template>

<script>

export default {
  name: 'TodoCategories',
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filterCategories: [],
      categories: [{
        id: 0,
        type: 'Food',
      }, {
        id: 1,
        type: 'Work',
      }, {
        id: 2,
        type: 'School',
      }],
    };
  },
  methods: {
    handleChangeCategories() {
      const payload = {
        mode: this.mode,
        categories: this.filterCategories,
      };

      this.$store.commit('UPDATE_FILTER_CATEGORIES', payload);
    },
  },
};
</script>

<style scoped>

</style>
