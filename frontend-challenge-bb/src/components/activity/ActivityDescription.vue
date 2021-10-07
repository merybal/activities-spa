<template>
  <section>
    <div class="adDescriptionContainer">
      <image-carousel :images="activity.activity.image"></image-carousel>
      <div class="adDescription">
        <h1>{{ activity.title }}</h1>
        <p class="adDescriptionText">{{ activity.activity.description }}</p>
        <div class="adParticipants">
          <img :src="participantsSVG" class="adPeopleSVG" />
          <p>{{ participantsText }}</p>
        </div>
        <p class="adLocationContainer">
          <img :src="locationSVG" class="adLocationSVG" />
          {{ activity.activity.locations[0].province }}
        </p>
        <h3 class="adPoints">{{ activity.points }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import ImageCarousel from "./ImageCarousel.vue";

export default {
  props: ["activity"],
  components: {
    ImageCarousel,
  },
  data() {
    return {
      locationSVG: require("../../assets/Location.svg"),
    };
  },
  computed: {
    participantsSVG() {
      if (this.activity.activity.participants === 1) {
        return require("../../assets/Personas1.svg");
      } else if (this.activity.participants === 2) {
        return require("../../assets/PersonasPara2.svg");
      } else {
        return require("../../assets/Personas2+.svg");
      }
    },
    participantsText() {
      console.log("here", this.activity.activity.image);
      if (this.activity.activity.participants === 1) {
        return "Para 1 persona";
      } else {
        return `Para ${this.activity.activity.participants} personas`;
      }
    },
  },
};
</script>