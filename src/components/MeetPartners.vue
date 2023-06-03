<script lang="ts" setup>
const imageUrl = (name: string): string => {
  return new URL(`../assets/${name}.png`, import.meta.url).href;
};
const partners: {
  name: string;
  img: string;
}[] = [
  {
    name: "Lawrence Mansour",
    img: "Lawrence-Mansour",
  },

  {
    name: "Steven Harris",
    img: "Steven-Harris",
  },
  {
    name: "Belbron Emanoel",
    img: "Belbron-Emanoel",
  },
];
</script>
<template>
  <section
    class="meet-partners row px-4 px-md-0 container justify-content-center mx-auto"
  >
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 col-12 px-4">
        <h1 class="fw-bold">Meet Your New Partners</h1>
        <p class="h5 py-4 w-75">
          <span class="text-gray-500">
            Since 2015, Lawrence Mansour, Belbron Emanoel, and Steven Harris
            have been running EZ-AD and scaling several successful companies to
            more than a million dollars in annual recurring revenue. At its
            core, they are hard-core entrepreneurs capable of executing any new
            project, regardless of the scope.
            <br />
            <br />
            Now, all that experience is being directed into Vice City Labs to
            incubate, build and scale the most memorable companies involved in
            the usage of AI and Web 3.</span
          >
        </p>
      </div>
      <div class="col-6">
        <div class="d-flex flex-column align-items-center">
          <!-- show 3 items last items center  -->
          <div class="row justify-content-center">
            <div
              class="col-md-4 col-12 my-3 mx-3 d-flex align-items-center"
              v-for="(item, index) in partners"
              :key="index"
            >
              <div class="text-center">
                <img
                  :src="imageUrl(item.img)"
                  :alt="item.name"
                  class="img-fluid rounded-3"
                />
                <h5 class="fw-bold mt-3">{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div>

        <img
          src="@/assets/header-main-vector-4.svg"
          class="position-absolute"
          alt="vector"
        />
      </div>
    </div>
    <div class="text-center">
      <h1 class="fw-bold">Ready to meet us?</h1>
      <div class="my-4">
        <button class="btn btn-custom-primary text-uppercase px-4 fw-bold">
          Schedule a Call
        </button>
      </div>
    </div>
  </section>
</template>
