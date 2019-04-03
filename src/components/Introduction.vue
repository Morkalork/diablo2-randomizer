<template>
  <div id="introduction">
    <h1>
      <img alt="Vue logo" src="../assets/logo.png">
      Welcome to the Diablo 2 Team Randomizer
      <img alt="Vue logo" src="../assets/logo.png">
    </h1>
    <p>This application will let you randomize your Diablo 2 teams for that special random feeling!</p>
    <p>Just fill in the names of the participants in the input below as a comma separated string and we'll take care of the rest!</p>
  </div>
</template>

<script>
export default {
  name: "Introduction"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#introduction {
  h1 {
    img {
      width: 2rem;
    }
  }
}
</style>
