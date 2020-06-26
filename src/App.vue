<template>
  <div id="app" :class="getTheme">
    <Header />
    <main id="router-view-wrapper">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed: {
    getTheme: function() {
      return this.$store.state.currentTheme;
    }
  }
};
</script>

<style>
/** Reset */
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
header,
footer,
div,
ul,
ol,
li,
span,
p {
  margin: 0;
  padding: 0;
}

/** Default Theme */
#app {
  --pri-bg-color: #2c2c2c;
  --pri-fg-color: #d5d6d7;
  --sec-bg-color: #1b1b1b;
  --sec-fg-color: #cfd0d1;
  --tir-bg-color: #404040;
  --tir-fg-color: #e9ecef;
}

/** Light Theme */
#app.light-theme {
  --pri-bg-color: #ffffff;
  --pri-fg-color: #2c2c2c;
  --sec-bg-color: #35bba9;
  --sec-fg-color: #e2e5f8;
  --tir-bg-color: #e9ecef;
  --tir-fg-color: #000000;
}

/** Set Everything to take the Full Viewport */
html,
body,
#app {
  min-height: 100vh;
}

#app {
  background-color: var(--pri-bg-color);
  color: var(--pri-fg-color);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

/** The main element should fill the rest of the page. */
#router-view-wrapper {
  flex-grow: 1;
}

/** Global helper to center content to something more comfortable. */
.container {
  max-width: 1280px;
  margin: 0 auto;
}

/** Global helper to override link styles. */
a {
  color: var(--pri-fg-color);
  text-decoration: none;
}

/** Global helper to make clickable links clearer with a hover affect. */
.hover:not(:hover):not(:focus),
a:not(.hover-excluded):not(:hover):not(:focus) {
  opacity: 0.8;
}
</style>
