<script lang="ts" setup></script>
<template>
  <div class="header">
    <section class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <div class="logo p-2">
              <img
                src="../assets/vicecity-logo-neon-raster.svg"
                alt="logo"
              /></div
          ></a>
          <button
            class="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarScroll"
          >
            <ul
              class="navbar-nav d-flex my-2 my-lg-0 navbar-nav-scroll gap-4 px-4"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                  >Who We Are</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">What We Do</a>
              </li>
              <li>
                <button class="btn btn-custom-primary">Contact Us</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="circle-effect d-flex justify-content-center align-items-center"
        style=""
      ></div>
      <div
        class="w-50 mx-auto d-flex justify-content-center align-items-center py-4"
      >
        <img
          src="@/assets/header-main-vector.svg"
          class="position-absolute vector-1"
          alt="vector"
        />
        <img
          src="@/assets/header-main-vector-2.svg"
          class="position-absolute vector-2"
          alt="vector"
        />
        <img
          src="@/assets/header-main-vector-3.svg"
          class="position-absolute vector-3"
          alt="vector"
        />
        <img
          src="@/assets/header-main-vector-4.svg"
          class="position-absolute vector-4"
          alt="vector"
        />
        <h1 class="text-white text-center py-10 header-text">
          Paving the way for innovative startups and entrepreneurs into the
          future of AI, Web 3, and beyond!
        </h1>
      </div>
      <div class="py-8 text-center d-flex flex-column move-down">
        <img
          src="@/assets/angel-down.svg"
          class="mx-auto"
          width="15px"
          alt="vector"
        />
        <img
          src="@/assets/angel-down.svg"
          class="mx-auto"
          width="15px"
          alt="vector"
        />
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.header {
  background-image: radial-gradient(
    circle at 0.5px 0.5px,
    hsla(271, 81%, 54%, 0.404) 1px,
    transparent 0
  );
  background-size: 40px 40px;
  &-text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 67px;
    text-shadow: -1px 0px 0px #fff, 2px 0px 0px rgba(255, 255, 255, 0.4);
    background: linear-gradient(94.18deg, #ffffff 47.34%, #c2b4ca 99.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    z-index: 11;
  }
}
/* add some animation for vector-1 class and vector-2 class */
.vector-1 {
  animation: vector-1 10s infinite;
}
.vector-2 {
  animation: vector-2 10s infinite;
}
@keyframes vector-1 {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes vector-2 {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(0px);
  }
}
.vector-3 {
  margin-top: -40px;
  margin-left: 30px;
}
.vector-4 {
  margin-top: -60px;
  margin-left: 50px;
}
/* add animation for move-down class for icon angel-down */
.move-down {
  animation: move-down 1s infinite;
}
@keyframes move-down {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.circle-effect {
  border-radius: 50%;

  background: #bd00ff;
  opacity: 0.8;
  filter: blur(400px);
  width: 750px;
  height: 750px;
  left: 30%;
  position: absolute;
  /* add some animation for this class */
  animation: circle-effect 10s infinite;
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
