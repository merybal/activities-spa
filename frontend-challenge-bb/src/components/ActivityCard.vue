<template>
  <section class="activityCardLarge">
    <div>
      <img :src="activity.activity.image[0]" :alt="activity.title" class="acImg" />
    </div>
    <div class="acHeader">
      <h2>{{ activity.title }}</h2>
      <img :src="participantsSVG" class="acPeopleSVG" />
    </div>
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
  props: ["activity"],
  data() {
    return {
      locationSVG: require("../assets/LocationPink.svg"),
    };
  },
  computed: {
    participantsSVG() {
      if (this.activity.activity.participants === 1) {
        return require("../assets/Personas1.svg");
      } else if (this.activity.participants === 2) {
        return require("../assets/PersonasPara2.svg");
      } else {
        return require("../assets/Personas2+.svg");
      }
    }
  }

};
</script>
<!-- https://codeburst.io/managing-svg-images-in-vue-js-applications-88a0570d8e88*/ -->