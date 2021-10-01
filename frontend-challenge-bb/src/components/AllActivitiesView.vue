<template>
  <div>
    <activity-card
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
    />
  </div>
</template>

<script>
import ActivityCard from './ActivityCard.vue';
import getActivities from '../services/helpers';
export default {
  components: { ActivityCard },
  // inject: ["activities"],
  data() {
    return {
      activities: [],
    }
  },
  methods: {
    async loadActivities() {
      this.activities = await getActivities();

    }
  },
  mounted() {
    this.loadActivities();
  }

};
</script>
