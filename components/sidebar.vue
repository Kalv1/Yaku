<script setup lang="ts">
import { PhPower } from "@phosphor-icons/vue";
</script>

<template>
  <div class="h-full bg-white p-6 flex flex-col items-center">
    <div class="w-fit font-bold font-boska text-xl text-[#747474]">
      <p>約</p>
    </div>
    <div class="grow py-5"></div>
    <div class="flex">
      <button class="rounded-full bg-[#F6F6F6] p-2 group">
        <PhPower
          class="fill-[#747474] group-hover:fill-[#e8756d]"
          size="16"
          weight="bold"
        />
      </button>
    </div>
  </div>
</template>
