<template>
  <div class="paginator">
    <paginator-prev-next direction="prev" />
    <div v-if="!checkCurrentPage(firstPage)" class="paginatorLaterals">
      <paginator-number :number="firstPage" @click="goToPageNumber(firstPage)"></paginator-number>
      <p class="paginatorNotCurrentPage">...</p>
    </div>
    <paginator-number
      v-for="number in numbers"
      :key="number"
      :number="number"
      :currentPage="currentPage"
      @click="goToPageNumber(number)"
    ></paginator-number>
     <div v-if="!checkCurrentPage(lastPage)" class="paginatorLaterals">
      <p class="paginatorNotCurrentPage">...</p>
      <paginator-number :number="lastPage" @click="goToPageNumber(lastPage)"></paginator-number>
    </div>
    <paginator-prev-next direction="next" />
  </div>
</template>

<script>
import PaginatorNumber from "./PaginatorNumber.vue";
import PaginatorPrevNext from "./PaginatorPrevNext.vue";
import { getPageNumbers } from "../../helpers/paginator";

export default {
  props: ["parsedLinkHeader", "currentPage"],
  emits: ['goToPage'],
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
    checkCurrentPage(targetPage) {
      return this.numbers.includes(targetPage);
    },
    goToPageNumber(pageNumber) {
      this.$emit('goToPage', pageNumber);
    }
  },
  watch: {
    parsedLinkHeader() {
      this.numbers = getPageNumbers(this.parsedLinkHeader, this.currentPage);
      console.log('antes', this.lastPage)
      this.firstPage = parseInt(this.parsedLinkHeader.first._page);
      this.lastPage = parseInt(this.parsedLinkHeader.last._page);
      console.log('despues', this.lastPage)
    },
    
  },
};
</script>