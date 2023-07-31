<template>
  <section class="upcoming">
    <div class="container">
      <div class="flex-wrapper">
        <div class="section-heading-wrapper">
          <span class="section-subtitle">Online Streaming</span>

          <div class="h2 section-title">Upcoming Movies</div>
        </div>

        <div class="filter-list">
          <q-btn class="filter-btn">Movies</q-btn>

          <q-btn class="filter-btn">TV Shows</q-btn>

          <q-btn class="filter-btn">Anime</q-btn>
        </div>
      </div>

      <div class="movies-list">
        <q-card
          flat
          class="movie-card"
          v-for="movie in getUpcomingMovies"
          :key="movie.title"
        >
          <div class="card-banner">
            <PosterImage :path="movie.poster_path" />
          </div>

          <q-card-section>
            <div class="movie-title-wrapper">
              <span class="card-title">{{ movie.title }}</span>
              <!-- <time datetime="2022">{{
                movie.release_date.substring(0, 4)
              }}</time> -->

              <time datetime="2022">{{
                movie.release_date.replace(/^(.{7}).*/, "$1")
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
          <q-card-section class="overview">
            {{ movie.overview }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, computed } from "vue";
import { useFetchMovies } from "../stores/MoviesStore";
import PosterImage from "./PosterImage.vue";

export default {
  components: {
    PosterImage,
  },
  setup() {
    const store = useFetchMovies();
    const getUpcomingMovies = computed(() => store.getUpcomingMovies);

    onMounted(() => {
      store.fetchUpcomingMovies();
    });

    return {
      getUpcomingMovies,
      PosterImage,
    };
  },
};
</script>
