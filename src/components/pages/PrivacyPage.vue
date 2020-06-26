<template>
  <div class="container">
    <ContentCard title="Privacy Policy">
      <p>We don't store data on you, you're all good!</p>
      <p>The only thing stored is your selected theme if you choose one.</p>
    </ContentCard>
  </div>
</template>

<script>
import ContentCard from "../ContentCard";

export default {
  name: "Privacy",
  components: {
    ContentCard
  }
};
</script>

<style scoped>
</style>
