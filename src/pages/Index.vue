<template>
  <Layout>
    <div class="overflow-x-hidden py-16 mt-8">
      <div style="position: relative; top: -40px; left: 0" />
      <div
        class="get-to-know-me container-inner mx-auto text-xl pb-16 relative"
      >
        <div
          class="absolute left-0"
          style="top: 50px; transform: translateX(-100%)"
        >
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div
          class="flex flex-col justify-between my-16 items-start justify-items-center"
        >
          <div class="flex flex-col items-center sm:flex-row pb-8 self-stretch sm:self-auto">
            <div class="sm:ml-6 pb-8 sm:pb-0">
              <g-image
                src="../../static/avatar_new.jpg"
                alt="avatar"
                class="w-32 h-32 rounded-full"
              />
            </div>
            <h1 class="sm:ml-8 text-2xl font-bold sm:ml-6">
              Hi, I'm Carsten Behrens
            </h1>
          </div>
          <p class="flex-1 text-lg sm:text-xl sm:ml-6 pb-8">
            I help people create websites and web-applications. On this website
            I publish articles mostly focused on web development.
          </p>
          <p class="flex-1 text-lg sm:text-xl sm:ml-6 font-bold">
            You can reach out to me using my email:
          </p>
          <p class="flex-1 text-lg sm:text-xl sm:ml-6 font-bold">
            carsten.behrens1@gmail.com
          </p>
        </div>
      </div>
      <!-- end get-to-know me -->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>
