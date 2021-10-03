<template>
  <div class="paginator">
    <paginator-prev-next direction="prev" />
    <div v-if="!checkCurrrentPage(firstPage)">
      <paginator-number :number="firstPage" @click="goToPage(firstPage)"></paginator-number>
      <p>...</p>
    </div>
    <paginator-number
      v-for="number in numbers"
      :key="number"
      :number="number"
      @click="goToPage(number)"
    ></paginator-number>
     <div v-if="!checkCurrrentPage(lastPage)">
      <paginator-number :number="lastPage" @click="goToPage(lastPage)"></paginator-number>
      <p>...</p>
    </div>
    <paginator-prev-next direction="next" />
  </div>
</template>

<script>
import PaginatorNumber from "./PaginatorNumber.vue";
import PaginatorPrevNext from "./PaginatorPrevNext.vue";
import { getPageNumbers } from "../helpers/paginator";

export default {
  props: ["parsedLinkHeader", "currentPage"],
  emits: ['go-to-page'],
  components: {
    PaginatorNumber,
    PaginatorPrevNext,
  },
  data() {
    return {
      numbers: [],
      firstPage: 0,
      lastPage: 0,
    };
  },
  methods: {
    checkCurrrentPage(targetPage) {
      return this.numbers.includes(targetPage);
    },
    goToPage(pageNumber) {
      console.log(pageNumber)
      this.$emit('goToPage', pageNumber);
    }
  },
  watch: {
    parsedLinkHeader() {
      this.numbers = getPageNumbers(this.parsedLinkHeader, this.currentPage);
      this.lastPage = parseInt(this.parsedLinkHeader.last._page);
      this.firstPage = parseInt(this.parsedLinkHeader.first._page);
    },
  },
};
</script>