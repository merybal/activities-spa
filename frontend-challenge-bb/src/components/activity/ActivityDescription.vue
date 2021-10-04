<template>
  <section>
    <!-- <vue-slick-carousel v-bind="settings">
      <div>
        <img :src="activity.activity.image[0]" :alt="activity.title" />
      </div>
      <div>
        <img :src="activity.activity.image[1]" :alt="activity.title" />
      </div>
      <div>
        <img :src="activity.activity.image[2]" :alt="activity.title" />
      </div>
      <div>
        <img :src="activity.activity.image[3]" :alt="activity.title" />
      </div>
    </vue-slick-carousel> -->
    <div class="adDescriptionContainer">
      <img
        :src="activity.activity.image[0]"
        alt="image carousel"
        class="adCarousel"
      />
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
// import VueSlickCarousel from "vue-slick-carousel";
export default {
  props: ['activity'],
  // components: {
  //   // VueSlickCarousel,
  // },
  data() {
    return {
      locationSVG: require("../../assets/Location.svg"),
      // settings: {
      //   dots: true,
      //   dotsClass: "slick-dots custom-dot-class",
      //   edgeFriction: 0.35,
      //   infinite: false,
      //   speed: 500,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      // },
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
      if (this.activity.activity.participants === 1) {
        return "Para 1 persona";
      } else {
        return `Para ${this.activity.activity.participants} personas`;
      }
    },
  },
  mounted() {
    console.log('activityDescription', this.activity);
  }
};
</script>