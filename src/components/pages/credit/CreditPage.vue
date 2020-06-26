<template>
  <div class="container">
    <ContentCard title="Credits">
      <p>This site was made by Vuki.</p>
      <p>You can visit all my social links down below.</p>
    </ContentCard>
    <div class="link">
      <router-link to="/credit/contributors">Contributors</router-link>
    </div>
    <div class="link">
      <router-link to="/credit/libraries">Libraries</router-link>
    </div>

    <router-view />
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

.link {
  margin: 1em 2em;
}
</style>
