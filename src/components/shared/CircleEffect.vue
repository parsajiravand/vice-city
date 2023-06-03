<script setup lang="ts">
defineProps({
  top: {
    type: String,
    required: false,
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
  width: 750px;
  height: 750px;
  left: 30%;
  position: absolute;
  animation: circle-effect 10s infinite;
  // add props
  top: v-bind(top);
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
