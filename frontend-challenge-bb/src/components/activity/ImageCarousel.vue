<template>
  <Carousel class="carousel__container">
    <Slide v-for="image in images" :key="image" class="carousel__slide">
      <img :src="image" alt="image" class="carousel__item" />
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  props: ["images"],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  mounted() {
    let buttonsNext = document.getElementsByClassName("carousel__next");
    if (buttonsNext.length > 0) {
      buttonsNext.item(0).click();
    }
  },
};
</script>

<style>
.carousel__container {
  width: 500px;
}

.carousel__slide {
  width: 563px;
  height: 371px;
}
.carousel__item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.carousel__prev,
.carousel__next {
  box-sizing: border-box;
  transform: none;
  width: 80px;
}
.carousel__icon {
  width: 100px;
  height: 100px;
}

.carousel__pagination {
  margin-top: -30px;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.carousel__pagination-button {
  padding: 0;
  position: relative;
  margin: var(--vc-pgn-margin);

  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  background-color: #c4c4c4;
}

.carousel__pagination-button--active {
  background-color: #ff6c5e;
}
</style>