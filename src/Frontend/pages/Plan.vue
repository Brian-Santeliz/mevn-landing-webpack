<template>
  <div>
    <PlanSmart />
    <Counter />
  </div>
</template>
<script>
import PlanSmart from "../components/Plan/PlanSmart.vue";
import Counter from "../components/Home/Counter.vue";
export default {
  components: {
    PlanSmart,
    Counter,
  },
};
</script>