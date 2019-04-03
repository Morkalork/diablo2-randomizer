<template>
  <div id="app">
    <marquee text="Diablo 2 RoXxX!"/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Marquee from "@/components/Marquee";

export default {
  name: "App",
  components: {
    Marquee
  }
};
</script>

<style lang="scss">
#app {
  font-family: "consolas";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html,
body{
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
