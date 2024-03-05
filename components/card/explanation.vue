<template>
  <div
    class="w-full h-full bg-black shadow-sm rounded overflow-hidden relative text-white"
  >
    <img
      class="h-full w-full opacity-50 object-cover absolute z-0"
      :src="`/${randomBackground()}`"
    />
    <div
      class="h-full w-full p-2.5 z-10 relative flex flex-col justify-between"
    >
      <div class="flex items-center gap-3">
        <h1 class="font-boska">Calendrier</h1>
        <div class="w-full h-[1px] bg-white" />
      </div>
      <p class="text-left text-[0.6rem] text-left">
        <slot />
      </p>
    </div>
  </div>
</template>
