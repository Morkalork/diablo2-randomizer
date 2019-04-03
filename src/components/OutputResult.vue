<template>
  <div id="output">
    <div id="result-wrapper" v-if="show()">
      <h2>Team:</h2>
      <div v-for="c in classes" :key="c.name" class="result">
        <img :src="getImageUrl(c.selectedClass)" alt="A character portrait!">
        <div class="information">
          <strong>{{c.name}}</strong>
          <p>{{c.selectedClass}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import parseInput from "@/helpers/parseInput";
import assignClasses from "@/helpers/assignClasses";

export default {
  name: "OutputResult",
  props: {
    input: String
  },
  data() {
    return {
      classes: []
    };
  },
  methods: {
    getImageUrl(selectedClass) {
      return require(`../assets/portraits/${selectedClass.toLowerCase()}.gif`);
    },
    show() {
      return this.classes && this.classes.length > 0;
    }
  },
  watch: {
    input: function(newInput) {
      const names = parseInput(newInput);
      const classes = assignClasses(names);
      classes.forEach((c, i) => this.$set(this.classes, i, c));
    }
  }
};
</script>

<style lang="scss" scoped>
#output {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  #result-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h2 {
      border-bottom: 4px #000 solid;
    }
    .result {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
      margin-bottom: 1rem;
      img {
        margin-right: 1rem;
      }

      p {
        margin: 0;
      }
    }
  }
}
</style>
