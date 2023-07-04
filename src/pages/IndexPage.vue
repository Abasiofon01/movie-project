<template>
  <q-page>
    <PopularMovies />
    <HeroPage />
    <UpcomingMovies />
    <ServicesSection />
    <TopRated />
    <TopSeries />
    <CTA />
    <FooterSection />

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn
        fab
        icon="keyboard_arrow_up"
        style="background-color: hsl(57, 97%, 45%); color: white"
      />
    </q-page-scroller>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CTA from "src/components/CTA.vue";
import HeroPage from "src/components/HeroPage.vue";
import PopularMovies from "src/components/PopularMovies.vue";
import TopRated from "src/components/TopRated.vue";
import TopSeries from "src/components/TopSeries.vue";
import FooterSection from "src/components/FooterSection.vue";
import UpcomingMovies from "src/components/UpcomingMovies.vue";
import ServicesSection from "src/components/ServicesSection.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    HeroPage,
    UpcomingMovies,
    ServicesSection,
    TopRated,
    TopSeries,
    CTA,
    PopularMovies,
    FooterSection,
  },
});
</script>

<header class="header" data-header>
   
  </header>
