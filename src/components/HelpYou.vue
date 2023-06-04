<script setup lang="ts">
import { PropType } from "vue";
import { IHelpYouItem } from "../interfaces/HelpYou";

defineProps({
  // the items
  items: {
    type: Array as PropType<IHelpYouItem[]>,
    required: true,
  },
});
</script>
<template>
  <section class="help-you">
    <h1 class="text-center my-5">This is how we will help you</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-12 col-md-5 m-3 py-4 help-you-box"
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
<style lang="scss" scoped>
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
