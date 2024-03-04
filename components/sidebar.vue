<script setup lang="ts">
import type { NavItem } from "~/type";
import { PhPower } from "@phosphor-icons/vue";

const route = useRoute();

const isSelected = (url: string): boolean => {
  return route.path === url;
};

defineProps({
  navigation: Object as PropType<NavItem[]>,
});
</script>

<template>
  <div class="h-full bg-white p-4 2xl:p-6 flex flex-col items-center">
    <div class="w-fit font-bold font-boska text-2xl text-[#747474]">
      <p>約</p>
    </div>
    <div class="grow py-5 flex flex-col gap-4">
      <NuxtLink
        v-for="navItem in navigation"
        class="p-3 rounded-md"
        :class="[
          isSelected(navItem.url) && `outline outline-[#747474]/45 outline-1`,
          navItem.color,
        ]"
        :to="navItem.url"
      >
        <component :is="navItem.icon" color="white" size="22" />
      </NuxtLink>
    </div>
    <div class="flex">
      <button class="rounded-full p-3 group">
        <PhPower class="fill-black group-hover:fill-[#e8756d]" size="24" />
      </button>
    </div>
  </div>
</template>
