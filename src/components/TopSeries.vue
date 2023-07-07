<template>
  <section class="tv-series">
    <div class="container">
      <p class="section-subtitle">Best TV Series</p>

      <span class="h2 section-title">World Best TV Series</span>

      <div class="movies-list">
        <q-card
          flat
          class="movie-card"
          v-for="movie in getTopRatedSeries"
          :key="movie.name"
        >
          <div class="card-banner">
            <PosterImage :path="movie.poster_path" />
          </div>

          <q-card-section>
            <div class="movie-title-wrapper">
              <span class="card-title">{{ movie.name }}</span>
              <time datetime="">{{
                movie.first_air_date.substring(0, 4)
              }}</time>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none card-meta">
            <div class="badge badge-outline">HD</div>

            <div class="duration">
              <q-icon name="las la-clock"></q-icon>

              <time datetime="PT137M">137 min</time>
            </div>

            <div class="rating">
              <q-icon name="star"></q-icon>

              <data>{{ movie.vote_average }}</data>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, computed } from "vue";
import { useFetchSeries } from "../stores/MoviesStore";
import PosterImage from "./PosterImage.vue";

export default {
  components: {
    PosterImage,
  },
  setup() {
    const store = useFetchSeries();
    const getTopRatedSeries = computed(() => store.getTopRatedSeries);

    onMounted(() => {
      store.fetchTopRatedSeries();
    });

    return {
      getTopRatedSeries,
      PosterImage,
    };
  },
};
</script>
