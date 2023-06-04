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
</script>
<template>
  <main class="main-bg text-white">
    <Header />
    <WhatWeDo data-aos="fade-up" />
    <OurPartners class="pb-5" data-aos="fade-up" />
    <TheFuture class="py-5" data-aos="fade-up" />
    <HelpYou class="py-5" data-aos="fade-up" />
    <Labs class="py-5" data-aos="fade-up" />
    <MeetPartners class="py-5" data-aos="fade-up" />
    <VCEvents class="py-5" data-aos="fade-up" />
    <Slides class="py-5" data-aos="fade-up" />
    <ContactForm class="py-5" data-aos="fade-up" />
    <Footer class="py-5" />
  </main>
</template>
<style></style>
