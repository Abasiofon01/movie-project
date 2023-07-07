<template lang="">
  <section class="hero">
    <div class="video-wrapper">
      <video
        muted
        autoplay
        loop
        id="myVideo"
        @canplay="updatePaused"
        @playing="updatePaused"
        @pause="updatePaused"
        ref="video_player"
      >
        <source src="../assets/the-equaliser.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>
      <!-- <div class="hero-content">
        <div class="title-and-btn-wrapper">
          <span class="h1 hero-title">
            Unlimited <strong>Movies</strong>, TVs Shows, & More.
          </span>

          <div class="meta-wrapper">
            <div class="badge-wrapper">
              <div class="badge badge-fill">PG 18</div>

              <div class="badge badge-outline">HD</div>
            </div>

            <div class="genre-wrapper">
              <a href="#">Romance,</a>

              <a href="#">Drama</a>
            </div>

            <div class="date-time">
              <div>
                <q-icon name="fa-regular fa-calendar-check"></q-icon>
                <time datetime="2022">2022</time>
              </div>

              <div>
                <q-icon name="las la-clock"></q-icon>

                <time datetime="PT128M">128 min</time>
              </div>
            </div>
          </div>

          <button class="btn btn-primary">
            <q-icon name="play"></q-icon>

            <span>Watch now</span>
          </button>
        </div>
      </div> -->
      <div class="video-play-pause-wrapper">
        <q-btn
          round
          :size="$q.screen.lt.md ? 'sm' : 'md'"
          icon="play_arrow"
          color="red"
          v-show="paused"
          @click="play"
        ></q-btn>
        <q-btn
          round
          icon="pause"
          :size="$q.screen.lt.md ? 'sm' : 'md'"
          color="red"
          v-show="playing"
          @click="pause"
        ></q-btn>
      </div>
    </div>
  </section>
</template>
<script>
// import PageWrapper from "";
export default {
  name: "HeroPage",
  components: {},
  data() {
    return {
      videoElement: null,
      paused: false,
    };
  },
  methods: {
    updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    play() {
      this.$refs.video_player.play();
    },
    pause() {
      this.$refs.video_player.pause();
    },
  },
  computed: {
    playing() {
      return !this.paused;
    },
  },
};
</script>
<style lang=""></style>
