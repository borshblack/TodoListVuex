<template>
  <v-layout>
    <v-checkbox v-for="(category, index) in listCategories"
                :key="index"
                :label="category.type"
                :value="category"
                @change="handleChangeCategories"
                v-model="filterCategories"></v-checkbox>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

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
    };
  },
  computed: {
    ...mapState({
      listCategories: 'enabledCategories',
    }),
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
