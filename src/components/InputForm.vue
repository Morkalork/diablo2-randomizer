<template>
  <div id="input-form">
    <input
      type="text"
      v-model="participants"
      @keydown="onKeyDown"
      placeholder="ex. Cain, Wirt, Lilith"
    />
    <button @click="run">Randomize!</button>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data() {
    return {
      participants: ""
    };
  },
  methods: {
    run: function() {
      this.$emit("randomize", this.participants);
    },
    onKeyDown: function(e) {
      if (e.keyCode === 13) {
        this.run();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#input-form {
  margin-top: 3rem;
  input[type="text"],
  button {
    padding: 0.5rem 1rem;
    border: 2px #000 solid;
    border-radius: 0.5rem;
    font-family: "consolas";
    outline: none;
  }
  input[type="text"] {
    margin-right: 1rem;
    min-width: 20vw;
  }

  button {
    background-color: #fff;
    font-weight: bold;
    &:hover {
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
