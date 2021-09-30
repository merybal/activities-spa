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
import ActivityCard from "./ActivityCard.vue";
export default {
  components: { ActivityCard },
  inject: ["activities"],
};
</script>
