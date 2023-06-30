<template lang="">
  <section class="hero">
    <video controls muted autoplay loop id="myVideo">
      <source
        src="../assets/the-equaliser.mp4"
        type="video/mp4"
        @canplay="updatePaused"
        @playing="updatePaused"
        @pause="updatePaused"
        ref="video_player"
      />
      Your browser does not support the video.
    </video>

    <div class="hero-content">
      <p class="hero-subtitle">Movies</p>

      <h1 class="h1 hero-title">
        Unlimited <strong>Movies</strong>, TVs Shows, & More.
      </h1>

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
            <ion-icon name="calendar-outline"></ion-icon>

            <time datetime="2022">2022</time>
          </div>

          <div>
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="PT128M">128 min</time>
          </div>
        </div>
      </div>

      <button class="btn btn-primary">
        <ion-icon name="play"></ion-icon>

        <span>Watch now</span>
      </button>
    </div>
    <div class="video-play-pause-wrapper">
      <q-btn
        round
        icon="play_arrow"
        color="red"
        v-show="paused"
        @click="play"
      ></q-btn>
      <q-btn
        round
        icon="pause"
        color="red"
        v-show="playing"
        @click="pause"
      ></q-btn>
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
      console.log(event);
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    play() {
      this.$refs.video_player.play();
    },
    pause() {
      //   this.$refs.video_player.pause();
      console.log("paused");
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
