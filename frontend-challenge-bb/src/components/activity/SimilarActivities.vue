<template>
  <section>
    <p class="adRulesTitle">Otras actividades similares:</p>
    <div class="similarActivitiesContainer">
      <activity-card
        v-for="similarActivity in similarActivities"
        :key="similarActivity.id"
        :activity="similarActivity"
        parent="similarActivities"
      />
    </div>
  </section>
</template>

<script>
import ActivityCard from "./ActivityCard.vue";
import { getPageOne } from "../../services/api-call";

export default {
  components: {
    ActivityCard,
  },
  data() {
    return {
      similarActivities: [],
    };
  },
  methods: {
    async fetchSimilarActivities() {
      const response = await getPageOne();
      this.similarActivities = response.data.slice(1, 5);
    },
  },
  created() {
    this.fetchSimilarActivities();
  },
};
</script>