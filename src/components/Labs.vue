<script lang="ts" setup></script>
<template>
  <section
    class="labs row px-4 px-md-0 container justify-content-center mx-auto"
  >
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 col-12 px-4">
        <h1 class="fw-bold">Vice City Labs</h1>
        <div class="gradient-border"></div>
        <p class="h5 py-4 w-75">
          <b> We help entrepreneurs to build million-dollar startups</b
          ><span class="text-gray-500">
            and bring the future of Artificial Intelligence and Web 3 into the
            present.</span
          >
        </p>
        <div class="labs-box d-flex flex-row">
          <div>
            Vice City Labs is a holistic incubation program looking to partner
            with founders eager to build memorable companies!
          </div>

          <div>
            <img
              src="@/assets/paragraph.svg"
              alt="paragraph"
              style="margin-top: -15px"
            />
          </div>
        </div>
      </div>
      <div class="col-6 d-none d-md-flex">
        <img src="@/assets/labs.png" alt="labs" style="max-width: 600.72px" />
        <img
          src="@/assets/header-main-vector-4.svg"
          class="position-absolute"
          alt="vector"
        />
      </div>
    </div>
    <div class="row text-center justify-content-center my-6">
      <div class="col-md-7 col-12 d-flex justify-content-center flex-column">
        <h4 class="fw-bold">
          Vice City Labs is mainly focused on early-stage startups providing
          technological solutions through the usage of Artificial Intelligence
          and Web 3 in ANY type of industry!
        </h4>
        <div class="h  mt-2">
          <b>
            If you think our incubation program brings the missing parts of the
            puzzle you are looking to solve, Let's take the first step and
            schedule a discovery call!
          </b>
          <span class="text-gray-500">
            We may be one meeting away from starting the next BIG million-dollar
            startup!
          </span>
        </div>
        <div class="my-4">
          <button class="btn btn-custom-primary text-uppercase px-4 fw-bold">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.gradient-border {
  margin-top: -15px;
  height: 2px;
  width: 40%;
  background-image: linear-gradient(
    to right,
    #f9a826,
    #f99726 50%,
    #f98c26 50%,
    #f96226 100%
  );
}
.labs-box {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.07) 0%,
    rgba(255, 255, 255, 0.035) 100%
  );
  /* shadow/sm */
  font-weight: 500;
  font-size: 24px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  line-height: 150%;
  border-radius: 12px;
  padding: 24px;
  gap: 8px;
}
</style>
