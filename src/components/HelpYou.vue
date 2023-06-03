<script setup lang="ts">
const imageUrl = (name: string): string => {
  return new URL(`../assets/help-you/${name}.svg`, import.meta.url).href;
};
const items = [
  {
    icon: imageUrl("state"),
    title: "State-of-the-art software development.",
    desc: "We count on more than 40 veteran developers ready to help you code the future.",
  },
  {
    icon: imageUrl("cutting"),
    title: "Cutting-edge UI/UX design",
    desc: "“You never get a second chance to make a good first impression.” We ensure both your product´s appearance and usability are nothing less than excellent.",
  },
  {
    icon: imageUrl("legal"),
    title: "Legal Structure.",
    desc: "Your company's legal structure is the cornerstone upon which your entire project will be built. We will help you get this right!",
  },
  {
    icon: imageUrl("certif"),
    title: "Marketing and Sales.",
    desc: "We will help you build a marketing and sales strategy that will ensure your product's success.",
  },
  {
    icon: imageUrl("online"),
    title: "Fundraising.",
    desc: "We will help you raise the funds you need to make your project a reality.",
  },
  {
    icon: imageUrl("seed"),
    title: "Business Development.",
    desc: "We will help you build a business development strategy that will ensure your product's success.",
  },
];
</script>
<template>
  <section class="help-you">
    <h1 class="text-center my-5">This is how we will help you</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-12 col-md-5 m-3  py-4 help-you-box"
          style=""
        >
          <div class="d-flex flex-column text align-items-start">
            <img
              :src="item.icon"
              class="my-2"
              alt="state-of-the-art-software-development"
            />
            <div class="d-flex flex-column">
              <b class="h5 mt-2">{{ item.title }}</b>
              <p class="weight-light">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.help-you-box {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0.009) 100%
  );
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 24px;
}
</style>
