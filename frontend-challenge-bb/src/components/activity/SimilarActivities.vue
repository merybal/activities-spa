<template>
  <section>
    <p class="adRulesTitle">Otras actividades similares:</p>
    <Carousel
      :settings="settings"
      class="carouselContainer"
    >
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
import { getActivities } from "../../services/api-call";

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
        // wrapAround: true,
        // modelValue: 0,
        // currentSlide: 1,
        // autoplay: "2000",
      },
    };
  },
  methods: {
    async fetchSimilarActivities() {
      const response = await getActivities(10);
      this.similarActivities = response.data.slice(1, 10);
    },
  },
  created() {
    this.fetchSimilarActivities();
  },
};
</script>

<style >
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