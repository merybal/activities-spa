<template>
  <section>
    <div class="paginator">
      <paginator-prev-next
        direction="prev"
        @click="goToPageNumber(previousPage)"
      />
      <div v-if="!checkCurrentPage(firstPage)" class="paginatorLaterals">
        <paginator-number
          :number="firstPage"
          @click="goToPageNumber(firstPage)"
        ></paginator-number>
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
        <paginator-number
          :number="lastPage"
          @click="goToPageNumber(lastPage)"
        ></paginator-number>
      </div>
      <paginator-prev-next direction="next" @click="goToPageNumber(nextPage)" />
    </div>
    <p class="paginatorResultsCount">{{ getResultsCount }}</p>
  </section>
</template>

<script>
import PaginatorNumber from "./PaginatorNumber.vue";
import PaginatorPrevNext from "./PaginatorPrevNext.vue";
import { getPageNumbers, getDisplayedItems } from "../../helpers/paginator";

export default {
  props: ["parsedLinkHeader", "currentPage", "totalCount"],
  emits: ["goToPage"],
  components: {
    PaginatorNumber,
    PaginatorPrevNext,
  },
  data() {
    return {
      numbers: [],
      firstPage: 0,
      lastPage: 0,
      previousPage: 0,
      nextPage: 0,
    };
  },
  methods: {
    checkCurrentPage(targetPage) {
      return this.numbers.includes(targetPage);
    },
    goToPageNumber(pageNumber) {
      this.$emit("goToPage", pageNumber);
    },
  },
  computed: {
    getResultsCount() {
      const response = getDisplayedItems(this.currentPage, this.totalCount, this.lastPage);
      return `${response.from}-${response.to} de ${this.totalCount} resultados`;
    }
  },
  watch: {
    parsedLinkHeader() {
      this.numbers = getPageNumbers(this.parsedLinkHeader, this.currentPage);
      this.firstPage = parseInt(this.parsedLinkHeader.first._page);
      this.lastPage = parseInt(this.parsedLinkHeader.last._page);
      if (this.currentPage !== 1) {
        this.previousPage = parseInt(this.parsedLinkHeader.prev._page);
      } else {
        this.previousPage = 1;
      }
      if (this.currentPage !== parseInt(this.parsedLinkHeader.last._page)) {
        this.nextPage = parseInt(this.parsedLinkHeader.next._page);
      } else {
        this.nextPage = parseInt(this.parsedLinkHeader.last._page);
      }
    },
  },
};
</script>