<template lang="">
  <div></div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useFetchMovies } from "../stores/store";
const store = useFetchMovies();

const getMovies = computed(() => {
  return store.getPopularMovies;
});
onMounted(() => {
  store.fetchPopularMovies();
});
</script>

<style lang=""></style>
