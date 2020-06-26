<template>
  <div>
    <div v-if="colors" id="container" >
      <ColorSplatter
        class="item"
        v-for="color in colors"
        v-bind:key="color.name"
        :name="color.name"
        :red="color.red"
        :green="color.green"
        :blue="color.blue"
        :alpha="color.alpha"
      />
    </div>
    <div v-else>
      <Loading/>
    </div>
  </div>
</template>

<script>
  import ColorSplatter from "../ColorSplatter";
  import Loading from "../Loading";

  export default {
    name: "ColorPage",
    components: {
      Loading,
      ColorSplatter
    },
    data() {
      return {
        colors: null
      };
    },
    beforeMount() {
      const requestUrl =
        "https://gist.githubusercontent.com/Vukory/b1f25d6362f99b2cbb834386255dff30/raw/66bfdd1407376becff71ea7b831db6f0beb42c08/colors.json";

      fetch(requestUrl)
        .then(response => response.json())
        .then(response => {
          const colors = [];

          for (let prop in response) {
            if (!Object.prototype.hasOwnProperty.call(response, prop)) continue;

            const jsonItem = response[prop];

            const color = {
              name: prop,
              red: jsonItem[0],
              green: jsonItem[1],
              blue: jsonItem[2],
              alpha: jsonItem[3]
            };

            colors.push(color);
          }

          return colors;
        })
        .then(colors => (this.colors = colors));
    }
  };
</script>

<style scoped>
  #container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .item {
    min-width: 250px;
    margin: 1em;
  }
</style>
