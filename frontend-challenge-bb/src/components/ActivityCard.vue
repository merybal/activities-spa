<template>
  <section class="activityCardLarge">
    <div>
      <img :src="activity.image" :alt="activity.name" class="acImg" />
    </div>
    <div class="acHeader">
      <h2>{{ activity.name }}</h2>
      <img v-if="activity.participants === 1" :src="people1SVG" class="acPeopleSVG" />
      <img v-else-if="activity.participants === 2" :src="people2SVG" class="acPeopleSVG" />
      <img v-if="activity.participants > 2" :src="people3SVG" class="acPeopleSVG" />
    </div>
    <p class="acLocation">
      <img :src="locationSVG" class="acLocationSVG" />
      {{ activity.location }}
    </p>
    <p class="acDescription">{{ activity.description }}</p>
    <h3 class="acPoints">{{ activity.market_price }}</h3>
  </section>
</template>

<script>
export default {
  props: ["activity"],
  data() {
    return {
      locationSVG: require("../assets/LocationPink.svg"),
      people1SVG: require("../assets/Personas1.svg"),
      people2SVG: require("../assets/PersonasPara2.svg"),
      people3SVG: require("../assets/Personas2+.svg"),
    };
  },
};
</script>
<!-- https://codeburst.io/managing-svg-images-in-vue-js-applications-88a0570d8e88*/ -->