<script setup lang="ts">
import { onMounted } from "vue";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/Header.vue";
import WhatWeDo from "../components/WhatWeDo.vue";
import OurPartners from "../components/OurPartners.vue";
import TheFuture from "../components/TheFuture.vue";
import HelpYou from "../components/HelpYou.vue";
import Labs from "../components/Labs.vue";
import MeetPartners from "../components/MeetPartners.vue";
import VCEvents from "../components/VCEvents.vue";
import ContactForm from "../components/ContactForm.vue";
import Footer from "../components/Footer.vue";
import Slides from "../components/Slides.vue";

onMounted(() => {
  AOS.init();
});

// for HelpYou component
// get the image url from the assets folder
const imageUrl = (name: string): string => {
  return new URL(`../assets/help-you/${name}.svg`, import.meta.url).href;
};
// the items
import { IHelpYouItem } from "../interfaces/HelpYou";
const HelpYouItems: IHelpYouItem[] = [
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
  <main class="main-bg text-white">
    <!-- Header -->
    <Header />
    <!-- WhatWeDo -->
    <WhatWeDo data-aos="fade-up" />
    <!-- OurPartners -->
    <OurPartners class="pb-5" data-aos="fade-up" />
    <!-- TheFuture -->
    <TheFuture class="py-5" data-aos="fade-up" />
    <!--HelpYou  -->
    <HelpYou :items="HelpYouItems" class="py-5" data-aos="fade-up" />
    <!-- Labs -->
    <Labs class="py-5" data-aos="fade-up" />
    <!-- MeetPartners -->
    <MeetPartners class="py-5" data-aos="fade-up" />
    <!-- VCEvents -->
    <VCEvents class="py-5" data-aos="fade-up" />
    <!-- Slides -->
    <Slides class="py-5" data-aos="fade-up" />
    <!-- ContactForm -->
    <ContactForm class="py-5" data-aos="fade-up" />
    <!-- Footer -->
    <Footer class="py-5" />
  </main>
</template>
<style></style>
