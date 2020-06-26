<template>
  <div class="container">
    <ContentCard title="Libraries">
      <table>
        <tr>
          <th>Library</th>
          <th>Purpose</th>
        </tr>
        <tr>
          <td>Vue</td>
          <td>Frontend Library</td>
        </tr>
        <tr>
          <td>Vuex</td>
          <td>Global State Management</td>
        </tr>
        <tr>
          <td>FontAwesome</td>
          <td>Iconography</td>
        </tr>
      </table>
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

table {
  width: 100%;
}
</style>