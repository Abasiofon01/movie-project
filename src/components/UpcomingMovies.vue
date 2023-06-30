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
        <q-card flat class="movie-card">
          <div class="card-banner">
            <img src="../assets//images//upcoming-1.png" />
          </div>

          <q-card-section>
            <div class="movie-title-wrapper">
              <span class="card-title">The Northman</span>
              <time datetime="2022">2022</time>
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

              <data>8.5</data>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat class="movie-card">
          <div class="card-banner">
            <img src="../assets//images//upcoming-1.png" />
          </div>

          <q-card-section class="movie-title-wrapper">
            <span class="card-title">The Northman</span>
            <time datetime="2022">2022</time>
          </q-card-section>

          <q-card-section class="q-pt-none card-meta">
            <div class="badge badge-outline">HD</div>

            <div class="duration">
              <q-icon name="las la-clock"></q-icon>

              <time datetime="PT137M">137 min</time>
            </div>

            <div class="rating">
              <q-icon name="star"></q-icon>

              <data>8.5</data>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat class="movie-card">
          <div class="card-banner">
            <img src="../assets//images//upcoming-1.png" />
          </div>

          <q-card-section class="movie-title-wrapper">
            <span class="card-title">The Northman</span>
            <time datetime="2022">2022</time>
          </q-card-section>

          <q-card-section class="q-pt-none card-meta">
            <div class="badge badge-outline">HD</div>

            <div class="duration">
              <q-icon name="las la-clock"></q-icon>

              <time datetime="PT137M">137 min</time>
            </div>

            <div class="rating">
              <q-icon name="star"></q-icon>

              <data>8.5</data>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat class="movie-card">
          <div class="card-banner">
            <img src="../assets//images//upcoming-1.png" />
          </div>

          <q-card-section class="movie-title-wrapper">
            <span class="card-title">The Northman</span>
            <time datetime="2022">2022</time>
          </q-card-section>

          <q-card-section class="q-pt-none card-meta">
            <div class="badge badge-outline">HD</div>

            <div class="duration">
              <q-icon name="las la-clock"></q-icon>

              <time datetime="PT137M">137 min</time>
            </div>

            <div class="rating">
              <q-icon name="star"></q-icon>

              <data>8.5</data>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "UpcomingMovies",
};
</script>
<style lang=""></style>
