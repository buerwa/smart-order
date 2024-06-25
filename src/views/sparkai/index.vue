<template>
  <div class="sparkai-container">
    <SparkAI />
  </div>
</template>

<script>
import SparkAI from '@/components/SparkAI/index.vue';

export default {
  name: 'SparkAIView',
  components: {
    SparkAI,
  },
};
</script>

<style scoped>
.sparkai-container {
  margin: 30px;
}
</style>