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
      this.activities = response.data;
      this.parsedLinkHeader = response.linkHeader;
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
