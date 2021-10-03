<template>
  <section>
    <div class="allActivitiesContainer">
      <activity-card
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </div>
    <paginator :parsedLinkHeader="parsedLinkHeader" :currentPage="currentPage" @go-to-page="switchPage"></paginator>
  </section>
</template>

<script>

import ActivityCard from './ActivityCard.vue';
import { getPageOne, getActivities } from '../services/api-call';
import Paginator from './Paginator.vue';

export default {
  components: { ActivityCard, Paginator },
  data() {
    return {
      activities: [],
      parsedLinkHeader: {},
      currentPage: 1,
    }
  },
  methods: {
    async switchPage(value) {
      console.log('here')
      console.log('parent', value)
      const response = await getActivities(value);
      this.activities = response.data;
      this.parsedLinkHeader = response.linkHeader;
      this.currentPage = value;
    },
    async fillData() {
      const response = await getPageOne();
      this.activities = response.data;
      this.parsedLinkHeader = response.linkHeader;
    }

  },
  created() {
    this.fillData();
  }
};
</script>
