<template>
  <div :class="isPageSelected">
    <p>{{ number }}</p>
  </div>
</template>

<script>
export default {
  props: ["number", "currentPage"],
  computed: {
    isPageSelected() {
      return this.currentPage === this.number
        ? "paginatorCurrentPage"
        : "paginatorNotCurrentPage";
    },
  },
};
</script>