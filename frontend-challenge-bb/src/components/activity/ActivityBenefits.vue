<template>
  <section>
    <div class="adDetailsContainer">
      <div class="adTitleContainer">
        <p class="adDetailsTitle">¿Qué incluye?</p>
        <div class="adUnderlined"></div>
      </div>
      <p v-html="activity.activity.benefits" class="adBenefits"></p>
      <p class="adRulesTitle">
        <img :src="rulesSVG" class="adRulesSVG" />Reglas:
      </p>
      <p class="adBenefits adRules">{{ activity.activity.small_print }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['activity'],
  data() {
    return {
      rulesSVG: require("../../assets/Reglas.svg"),
      similarActivities: [],
    };
  },
};
</script>