<template>
  <section v-if="activity" class="activityDetailContainer">
    <img :src="arrow" alt="previous page" class="adArrow" @click="goBack" />
    <activity-description :activity="activity" ></activity-description>
    <activity-benefits :activity="activity" ></activity-benefits>
    <similar-activities></similar-activities>
  </section>
</template>

<script>
import ActivityDescription from "../activity/ActivityDescription.vue";
import ActivityBenefits from "../activity/ActivityBenefits.vue";
import SimilarActivities from '../activity/SimilarActivities.vue';
import { getActivity } from '../../services/api-call';

export default {
  components: {
    ActivityDescription,
    ActivityBenefits,
    SimilarActivities,
  },
  data() {
    return {
      arrow: require("../../assets/Arrow.svg"),
      activity: null,
    };
  },
  methods: {
    async fillActivityData() {
      const activity = await getActivity(this.$route.params.activityId);
      this.activity = activity;
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    '$route': 'fillActivityData',
  },
  created() {
    this.fillActivityData();
  },
};
</script>