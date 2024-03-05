<script setup lang="ts">
import type { NavItem } from "~/type";

const route = useRoute();

const isSelected = (url: string): boolean => {
  return route.path === url;
};

defineProps({
  navigation: Object as PropType<NavItem[]>,
});
</script>

<template>
  <div
    class="h-full bg-white p-4 2xl:p-6 flex flex-col shadow-sm 2xl:min-w-64 min-w-40"
  >
    <p class="text-center font-bold font-boska text-2xl text-black">Yaku.</p>
    <div class="grow py-5 text-[#525B64]">
      <div
        class="flex flex-col"
        v-for="(category, index) in navigation"
        :class="index > 0 && 'mt-6'"
      >
        <p class="font-bold text-3xs tracking-wider mb-2">
          {{ category.category }}
        </p>
        <div class="flex flex-col gap-2">
          <NuxtLink
            v-for="item in category.data"
            class="rounded-md flex items-center gap-3 py-1 px-2"
            :class="[
              isSelected(item.url) &&
                `bg-[#F8F9FB] outline outline-[#F0F0F0] outline-1`,
            ]"
            :to="item.url"
          >
            <component
              :is="item.icon"
              color="#525B64"
              weight="thin"
              size="12"
            />
            <p class="text-[0.6rem]">{{ item.title }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex">
      <NuxtLink
        class="w-full bg-black py-1.5 text-white text-[0.6rem] text-center rounded-md"
      >
        Déconnexion
      </NuxtLink>
    </div>
  </div>
</template>
