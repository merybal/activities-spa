<template>
  <section>
    <div class="allActivitiesContainer">
      <activity-card
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        parent="allActivitiesView"
      />
    </div>
    <paginator
      :parsedLinkHeader="parsedLinkHeader"
      :currentPage="currentPage"
      :totalCount="totalCount"
      @go-to-page="switchPage"
    />
  </section>
</template>

<script>
import ActivityCard from "../activity/ActivityCard.vue";
import { getActivities } from "../../services/api-call";
import Paginator from "../paginator/Paginator.vue";

export default {
  components: { ActivityCard, Paginator },
  data() {
    return {
      activities: [],
      parsedLinkHeader: {},
      currentPage: 1,
      totalCount: 0,
    };
  },
  methods: {
    async switchPage(pageNumber) {
      this.$router.push({ path: "/actividades", query: { page: pageNumber } });
    },
    async fillData() {
      if (this.$route.query.page) {
        this.currentPage = parseInt(this.$route.query.page);
      }
      const response = await getActivities(this.currentPage);
      console.log(response)
      this.activities = response.data;
      this.parsedLinkHeader = response.linkHeader;
      this.totalCount = response.totalCount;
    },
  },
  watch: {
    '$route': "fillData",
  },
  created() {
    this.fillData();
  },
};
</script>
