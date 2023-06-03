<script setup lang="ts">
const imageUrl = (index: number): string => {
  return new URL(`../assets/partners/partner-${index}.png`, import.meta.url)
    .href;
};
console.log(imageUrl(1));
</script>
<template>
  <section class="our-partners container-md text-center">
    <h1 class="mb-5">Some Of Our Partners</h1>

    <div class="justify-content-center row">
      <div v-for="index in 10" class="col-5 col-sm-3 col-md-2 mx-2 my-2 patner-box">
        <img :src="imageUrl(index)" alt="partner-logo" />
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.patner-box {
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
}
</style>
