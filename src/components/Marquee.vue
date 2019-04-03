<template>
  <p>
    <span>{{text}}</span>
  </p>
</template>

<script>
export default {
  name: "Marquee",
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  span {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 15s linear infinite;
  }
}
</style>
