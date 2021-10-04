<template>
  <section :class="getStyles.container">
    <router-link :to="getActivityRoute">
      <img
        :src="activity.activity.image[0]"
        :alt="activity.title"
        :class="getStyles.image"
      />
      <div class="acHeader">
        <h2>{{ activity.title }}</h2>
        <img :src="getParticipantsSVG" class="acPeopleSVG" />
      </div>
    </router-link>
    <p class="acLocation">
      <img :src="locationSVG" class="acLocationSVG" />
      {{ activity.activity.locations[0].province }}
    </p>
    <p class="acDescription">{{ activity.activity.description }}</p>
    <h3 class="acPoints">{{ activity.points }}</h3>
  </section>
</template>

<script>
export default {
  props: ["activity", "parent"],
  data() {
    return {
      locationSVG: require("../../assets/LocationPink.svg"),
    };
  },
  computed: {
    getActivityRoute() {
      return `/actividades/${this.activity.id}`;
    },
    getParticipantsSVG() {
      if (this.activity.activity.participants === 1) {
        return require("../../assets/Personas1.svg");
      } else if (this.activity.participants === 2) {
        return require("../../assets/PersonasPara2.svg");
      } else {
        return require("../../assets/Personas2+.svg");
      }
    },
    getStyles() {
      if (this.parent === "allActivitiesView") {
        return {
          container: "activityCardLarge",
          image: "acImgL",
        };
      } else {
        return {
          container: "activityCardSmall",
          image: "acImgS",
        };
      }
    },
  },
};
</script>