<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContentCard",
  props: {
    title: String
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 1em;
}

.card {
  margin: 1em;
  padding: 1em;
  background-color: var(--tir-bg-color);
  border-radius: 1em;
  text-align: center;
}
</style>
