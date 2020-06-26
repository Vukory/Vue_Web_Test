<template>
  <div class="container">
    <ContentCard title="Theme Selection">
      <p>You can click a color below to change your theme!</p>
      <p>I don't know what I'm doing, so you have to refresh the page once you've clicked one!</p>
      <ul>
        <li
          v-for="theme of availableThemes"
          v-bind:key="theme.class"
          v-on:click="setTheme(theme.class)"
        >{{ theme.name }}</li>
      </ul>
    </ContentCard>
  </div>
</template>

<script>
import ContentCard from "../ContentCard";
const availableThemes = [
  {
    name: "Dark",
    class: "dark-theme",
    color: "#2C2C2C"
  },
  {
    name: "Light",
    class: "light-theme",
    color: "#17679A"
  }
];

export default {
  name: "ThemePage",
  components: { ContentCard },
  data() {
    return {
      availableThemes: availableThemes
    };
  },
  methods: {
    setTheme(themeName) {
      localStorage.setItem("theme", themeName);
      this.$store.commit("setTheme", themeName);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1em 0 0 0;
}
li:hover {
  cursor: pointer;
}
</style>
