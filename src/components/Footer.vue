<template>
  <footer id="global-footer">
    <div class="container">
      <div id="footer-meta">
        <div id="footer-logo">
          <Logo class="logo" />
        </div>
        <div id="footer-social-links">
          <a href="https://github.com/Vukory" target="_blank" aria-label="GitHub">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://gitlab.com/Vukory" target="_blank" aria-label="GitLab">
            <font-awesome-icon :icon="['fab', 'gitlab']" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCJsrZMuPNo12DhqiJKpDbIQ"
            target="_blank"
            aria-label="YouTube"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
        </div>
      </div>
      <div id="footer-copyright">
        Copyright
        <font-awesome-icon :icon="['far', 'copyright']" />2020-2020 Vukory
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../assets/vukory_logo.svg";

export default {
  name: "Footer",
  components: {
    Logo
  }
};
</script>

<style scoped>
footer {
  margin: 1em;
}

#footer-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}

#footer-social-links a {
  font-size: 2em;
  margin-left: 0.5em;
}

.light-theme #footer-social-links a {
  color: var(--sec-bg-color);
}

#footer-copyright {
  text-align: center;
}
</style>
