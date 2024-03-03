<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="w-full h-full p-4 xl:flex gap-4">
    <div
      class="xl:block hidden w-1/2 h-full rounded overflow-hidden bg-black relative"
    >
      <client-only>
        <img
          class="h-full w-full opacity-50 object-cover"
          :src="`/${randomBackground()}.jpg`"
          alt="plants"
        />
        <div
          class="p-4 left-0 h-full top-0 flex flex-col justify-between absolute max-w-[50%] font-boska"
        >
          <div
            class="text-white w-full text-balance tracking-wider flex items-center gap-4"
          >
            <a href="http://google.com/">Enterprise</a>
            <div class="w-full h-[1px] bg-white" />
          </div>

          <div class="text-white text-balance tracking-wider">
            <h1 class="text-5xl">Yaku.</h1>
            <p class="font-light">
              Réserve ton créneaux en agence, et viens profiter de tes collègues
              !
            </p>
          </div>
        </div>
      </client-only>
    </div>
    <div class="xl:w-1/2 w-full h-full"></div>
  </div>
</template>
