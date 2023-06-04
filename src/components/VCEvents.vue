<script setup lang="ts"></script>
<template>
  <section
    id="events"
    class="position-relative eventsSection py-5 position-relative z-1"
  >
    <div class="container position-relative z-1">
      <div class="row mb-5 justify-content-center">
        <div class="col-lg-11 justify-content-center">
          <h2
            class="display-4 lh-sm mx-auto fw-bold w-auto d-table shadow-heading underline-gradiant mb-4"
          >
            Vice City Events
          </h2>
          <p class="fs-3 fw-normal lh-base text-center px-0 px-lg-5">
            We inspire change by fostering meaningful conversations about the
            present and the future of disruptive technologies in the
            entrepreneurial world.
          </p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12 col-lg-6">
          <h2 class="mb-3 fs-1 lh-sm fw-bold">
            Are you joining us at<br />our next event?
          </h2>
          <p class="h5 lh-base fw-normal mb-3">
            Once a month, Vice City Ventures organizes its networking mixer
            event in beautiful Santa Monica, California, where investors,
            entrepreneurs, and talented people meet to become part of the
            discussion about AI and Web 3!
          </p>
          <p class="h5 lh-base fw-normal mb-4">
            Whether you are looking for your next business partner, hoping to
            raise capital, or just want to meet new like-minded friends,
            <b>this event is for you!</b>
          </p>
          <div class="card form-card p-2 p-md-4 mb-5 mb-lg-0">
            <div class="d-flex mb-3 align-items-center justify-content-start">
              <img src="@/assets/email.svg" alt="" class="me-2" />
              <div class="text-white">
                <h6 class="fs-5 lh-base fw-bold mb-0 ps-1">
                  Join our email list to stay updated on coming events
                </h6>
                <p class="h5 lh-base m-0 ps-1">
                  We promise to keep our emails concise.
                </p>
              </div>
            </div>
            <form class="d-flex" method="post">
              <input
                placeholder="Write your email!"
                type="email"
                class="form-control shadow-sm rounded-2 text-light small-text me-3"
                id="email-subscribe"
              />
              <button
                class="btn btn-custom-primary py-2 px-4 fw-bold text-uppercase lh-1"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 treeple-image">
          <img src="@/assets/VC-event.webp" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">

</style>
