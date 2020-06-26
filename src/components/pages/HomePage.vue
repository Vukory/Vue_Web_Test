<template>
  <div id="welcome-card" class="container">
    <div id="welcome-cards">
      <ContentCard title="Welcome to Color Palette!">
        <p>
          This is a small web application made in Vue that will return
          a couple colors from a gist on GitHub.
        </p>
        <p>You can click below if to see an abitrary list of colors.</p>
        <div class="link-container">
          <router-link class="link" to="/colors">Colors</router-link>
        </div>
      </ContentCard>
    </div>
  </div>
</template>

<script>
import ContentCard from "../ContentCard";

export default {
  name: "Home",
  components: {
    ContentCard
  }
};
</script>

<style scoped>
#welcome-card {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-container {
  margin: 1em 0 0 0;
}
</style>
