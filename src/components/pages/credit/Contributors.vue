<template>
  <div class="container">
    <ContentCard title="Contributors">
      <p>Vuki made this site.</p>
    </ContentCard>
  </div>
</template>

<script>
import ContentCard from "../../ContentCard";

export default {
  name: "Credit",
  components: {
    ContentCard
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>