<template>
  <q-page>
    <HeroPage />
    <UpcomingMovies />
    <ServicesSection />
    <TopRated />
    <TopSeries />
    <CTA />
    <FooterSection />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CTA from "src/components/CTA.vue";
import HeroPage from "src/components/HeroPage.vue";
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
    FooterSection,
  },
});
</script>

<header class="header" data-header>
   
  </header>
