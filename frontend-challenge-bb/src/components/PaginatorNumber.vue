<template>
  <div class="paginatorBall">
    <p class="paginatorBallText">{{ number }}</p>
  </div>
</template>

<script>
export default {
  props: ["number"],
  watch: {
    number() {
    },
  },
};
</script>