<script setup lang="ts">
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const modules = [Navigation];
const swiperRef = ref(null);
</script>
<template>
  <section class="container">
    <swiper
      ref="{swiperRef}"
      :slidesPerView="4"
      :centeredSlides="false"
      :spaceBetween="40"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
    >
      <swiper-slide
        class="d-flex flex-column"
        v-for="(item, index) in 10"
        :key="index"
      >
        <div class="d-flex align-items-center justify-content-start mb-2">
          <img
            src="@/assets/calendar.webp"
            alt=""
          />
          <h6 class="m-0 ms-2 fs-6">Jun 8, 2022</h6>
        </div>
        <img
          class="w-100 rounded-3"
          src="@/assets/slider.webp"
          alt="slider"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>
<style lang="scss">
.mySwiper {
  .swiper-button-prev {
    color: #ffffff;
    margin: 0 10px 0 0;
  }
  .swiper-button-next {
    color: #ffffff;
    margin: 0 0 0 10px;
  }
}
</style>
