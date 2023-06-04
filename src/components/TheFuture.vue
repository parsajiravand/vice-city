<script lang="ts" setup>
import CircleEffect from "./shared/CircleEffect.vue";
</script>
<template>
  <section class="the-future row mx-0 px-4 px-md-0 position-relative">
    <div class="col-5 d-none d-md-flex robot-image" style="margin-left: -20px">
      <img
        src="@/assets/robot-hand-finger-pointing-ai-technology-backgrou-2022-09-16-09-23-42-utc-1.png"
        alt="robot-hand-finger-pointing-ai-technology"
      />
    </div>
    <div class="col-md-7 col-sm-8 col-lg-6 col-12 px-4">
      <h1>The future awaits those who dare!</h1>
      <h1>Let´s pioneer together.</h1>
      <div class="gradient-border"></div>
      <p class="h5 py-4 w-75">
        <b>
          The Vice City Ventures managing team is made up of hard-core
          developers with a proven record of building and scaling startups that
          generate millions</b
        ><span class="text-gray-500">
          of dollars in annual recurring revenue and partnering with Fortune 500
          companies to create the most exciting technology.</span
        >
      </p>
      <div class="d-flex justify-content-between">
        <span class="h3">Are you ready to join efforts?</span>
        <button
          class="btn btn-custom-primary py-3 px-4 fw-bold text-uppercase lh-1 mx-auto"
        >
          Contact Us
        </button>
      </div>
    </div>
    <CircleEffect top="10rem" />
  </section>
</template>
<style lang="scss">
.gradient-border {
  height: 2px;
  width: 65%;
  background-image: linear-gradient(
    to right,
    #f9a826,
    #f99726 50%,
    #f98c26 50%,
    #f96226 100%
  );
}
.robot-image {
  img {
    max-width: 400px;
    max-height: 400px;

    @media screen and (max-width: 1024px) {
      img {
        max-width: 200px;
        height: 200px;
      }
    }
    @media screen and (max-width: 768px) {
      img {
        max-width: 200px;
        height: auto;
      }
    }
  }
}
</style>
