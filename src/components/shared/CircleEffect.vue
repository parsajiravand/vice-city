<script setup lang="ts">
defineProps({
  top: {
    type: String,
    required: false,
  },
  width: {
    type: String,
    required: false,
    default: "750px",
  },
  height: {
    type: String,
    required: false,
    default: "750px",
  },
});
</script>
<template>
  <div
    class="circle-effect d-flex justify-content-center align-items-center"
  ></div>
</template>
<style lang="scss" scoped>
.circle-effect {
  border-radius: 50%;
  background: #bd00ff;
  opacity: 0.8;
  filter: blur(400px);
  width: v-bind(width);
  height: v-bind(height);
  left: 30%;
  position: absolute;
  animation: circle-effect 10s infinite;
  // add props
  top: v-bind(top);
  @media screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
    left: 5%;
  }
}
@keyframes circle-effect {
  //advance animation

  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
</style>
