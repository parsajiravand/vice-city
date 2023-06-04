<script setup lang="ts">
import CircleEffect from "./shared/CircleEffect.vue";
</script>
<template>
  <footer class="mainFooter py-4 blurAreaMark position-relative z-1">
    <div class="container">
      <div class="links row justify-content-center mb-5 pb-4">
        <div
          class="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 d-flex justify-content-between"
        >
          <a class="small-text" href="#"> Privacy Policy</a>
          <span></span>
          <a class="small-text" href="#"> Terms of Service </a>
          <span></span>
          <a class="small-text" href="#"> Forget me </a>
        </div>
      </div>
      <ul
        class="m-0 p-0 d-flex justify-content-center align-items-center list-unstyled social-icons"
      >
        <li class="mx-2">
          <a
            class="d-flex align-items-center justify-content-center rounded-circle"
            href=""
            ><img
              src="https://storage.googleapis.com/content.ezadtv.com/2023/01/01/63b1c69377c2c_fb.webp"
              alt=""
          /></a>
        </li>
        <li class="mx-2">
          <a
            class="d-flex align-items-center justify-content-center rounded-circle"
            href=""
            ><img
              src="https://storage.googleapis.com/content.ezadtv.com/2023/01/01/63b1c6389e5f5_tw.webp"
              alt=""
          /></a>
        </li>
        <li class="mx-2">
          <a
            class="d-flex align-items-center justify-content-center rounded-circle"
            href=""
            ><img
              src="https://storage.googleapis.com/content.ezadtv.com/2023/01/01/63b1c67763217_insta.webp"
              alt=""
          /></a>
        </li>
      </ul>
      <p class="small-text lh-base text-center mt-4 mb-0">
        Copyright © 2022 ViceCity Ventures
      </p>
    </div>
    <CircleEffect top="-250px" width="500px" height="500px" />
  </footer>
</template>
<style lang="scss">
.mainFooter .links {
  a {
    text-decoration: none;
    color: #ffffff;
  }
  span {
    border-right: 1px solid #ffffff;
  }
}
.social-icons a {
  background: rgba(94, 248, 255, 0.05);
  width: 56px;
  height: 56px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  &:hover {
    background: rgba(94, 248, 255, 0.2);
    transition: all 0.5s;
  }
}
</style>
