<template>
  <header id="global-header">
    <div class="container">
      <div>
        <router-link to="/" class="hover-excluded">
          <h1 class="link">Color Palette</h1>
        </router-link>
      </div>
      <div id="router-links">
        <router-link to="/colors">Colors</router-link>
        <router-link to="/privacy">Privacy</router-link>
        <router-link to="/theme">Theme</router-link>
        <router-link to="/credit">Credit</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#global-header {
  height: 4em;
  background-color: var(--sec-bg-color);
  padding: 1em;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

a {
  color: var(--sec-fg-color);
}

#router-links a {
  margin-right: 1em;
}
</style>
