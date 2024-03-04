<script setup lang="ts">
import type { NavItem } from "~/type";
import { PhPower, PhGearSix } from "@phosphor-icons/vue";

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
      <div class="flex flex-col">
        <p class="font-bold text-3xs tracking-wider mb-2">MAIN MENU</p>
        <div class="flex flex-col gap-3">
          <NuxtLink
            v-for="navItem in navigation"
            class="rounded-md flex items-center gap-3"
            :class="[isSelected(navItem.url) && ``]"
            :to="navItem.url"
          >
            <component
              :is="navItem.icon"
              color="#525B64"
              weight="thin"
              size="12"
            />
            <p class="text-[0.6rem]">{{ navItem.title }}</p>
          </NuxtLink>
        </div>
        <p class="font-bold text-3xs tracking-wider mt-8 mb-2">
          ACCOUNT CENTER
        </p>
        <div class="flex flex-col gap-3">
          <NuxtLink
            class="rounded-md flex items-center gap-3"
            :class="[isSelected('/parameter') && ``]"
            to="/parameter"
          >
            <PhGearSix color="#525B64" weight="thin" size="12" />
            <p class="text-[0.6rem]">Paramètres</p>
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
