<script setup lang="ts"></script>
<template>
  <section class="py-5 mt-3 contact-form position-relative">
    <div class="container py-0 py-md-5">
      <div class="row justify-content-center">
        <div class="col-xxl-6 col-lg-8">
          <h2 class="display-5 lh-sm fw-bold text-center mb-3 shadow-heading">
            <span class="position-relative underline-gradiant"
              >Are you interested in <br />our Incubation program?</span
            >
          </h2>
          <p class="fs-4 lh-base fw-normal text-center px-0 px-md-5 mb-4">
            Schedule a discovery call with us; We look forward to meeting you!
          </p>
          <form class="">
            <div class="mb-3">
              <label for="email" class="form-label small-text lh-base fw-bold"
                >Email</label
              >
              <input
                placeholder="Email"
                type="email"
                name="email"
                class="form-control shadow-sm rounded-3 text-light small-text lh-base"
                required
              />
            </div>
            <div class="mb-4">
              <label for="phone" class="form-label fw-bold small-text lh-base"
                >Phone Number</label
              >
              <input
                placeholder="Phone Number"
                name="phone"
                type="text"
                class="form-control shadow-sm rounded-2 text-light small-text lh-base"
                required
              />
            </div>
            <div class="mb-4">
              <label for="company" class="form-label small-text lh-base fw-bold"
                >Company Name</label
              >
              <input
                placeholder="Company Name"
                type="text"
                name="company"
                class="form-control shadow-sm rounded-2 text-light small-text lh-base"
                required
              />
            </div>
            <div class="mb-4">
              <label for="message" class="form-label small-text lh-base fw-bold"
                >Tell us about your startup</label
              >
              <textarea
                placeholder="What’s the problem it aims to solve, and why it's an exciting idea."
                class="form-control shadow-sm rounded-2 text-light small-text lh-base"
                style="height: 100px"
                name="startupMessage"
                required
              ></textarea>
            </div>
            <div class="mb-4">
              <label class="form-label small-text lh-base fw-bold"
                >How much revenue does your company have?</label
              >
              <div
                class="d-flex align-items-start flex-column flex-md-row align-items-md-center"
              >
                <div class="form-check me-2">
                  <input
                    class="form-check-input shadow-none border-0"
                    type="radio"
                    name="revenue"
                    id="flexRadioDefault1"
                    value="Less than $10,000"
                  />
                  <label
                    class="form-check-label small-text lh-base"
                    for="flexRadioDefault1"
                  >
                    Less than $10,000
                  </label>
                </div>
                <div class="form-check me-2">
                  <input
                    class="form-check-input shadow-none border-0"
                    type="radio"
                    name="revenue"
                    id="flexRadioDefault2"
                    value="Between $10,000 and $50,000"
                  />
                  <label
                    class="form-check-label small-text lh-base"
                    for="flexRadioDefault2"
                  >
                    Between $10,000 and $50,000
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input shadow-none border-0"
                    type="radio"
                    name="revenue"
                    id="flexRadioDefault3"
                    value="More than $50,000"
                  />
                  <label
                    class="form-check-label small-text lh-base"
                    for="flexRadioDefault3"
                  >
                    More than $50,000
                  </label>
                </div>
              </div>
              <label for="revenue" class="error"></label>
            </div>
            <div class="d-flex justify-content-end">
              <button
                class="btn btn-custom-primary py-3 px-4 fw-bold text-uppercase lh-1"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.contact-form {
  background: url(../assets/code.webp) left 150px top 100px no-repeat;
}
</style>
