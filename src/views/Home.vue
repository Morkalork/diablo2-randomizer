<template>
  <div id="home">
    <div id="content">
      <introduction/>
      <input-form @randomize="handleRandomize"/>
      <output-result :input="input"/>
    </div>
    <extra-ninetees/>
    <footer>
      <p>
        Source code available at
        <a href="https://github.com/Morkalork/diablo2-randomizer">GitHub</a> for all interested parties.
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/Introduction";
import InputForm from "@/components/InputForm";
import OutputResult from "@/components/OutputResult";
import ExtraNinetees from "@/components/ExtraNinetees";

export default {
  name: "home",
  components: {
    Introduction,
    InputForm,
    OutputResult,
    ExtraNinetees
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    handleRandomize: function(input) {
      this.input = input;
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
