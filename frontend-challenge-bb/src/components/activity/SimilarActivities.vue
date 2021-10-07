<template>
  <section>
    <p class="adRulesTitle">Otras actividades similares:</p>
    <Carousel :settings="settings" class="carouselContainer">
      <Slide
        class="carouselSlide"
        v-for="activity in similarActivities"
        :key="activity"
      >
        <activity-card
          :key="activity.id"
          :activity="activity"
          parent="similarActivities"
        />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import ActivityCard from "./ActivityCard.vue";
import { getSimilarActivities } from "../../helpers/similar-activities";

import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    ActivityCard,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      similarActivities: [],
      settings: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    };
  },
  methods: {
    async fetchSimilarActivities() {
      this.similarActivities = await getSimilarActivities();
    },
  },
  created() {
    this.fetchSimilarActivities();
  },
};
</script>

<style scoped>
.carouselContainer {
  width: 1150px;
  margin-top: -180px;
}

.carouselSlide {
  margin-top: 180px;
}

li {
  text-align: left;
}
</style>