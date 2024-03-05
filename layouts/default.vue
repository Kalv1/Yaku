<script setup lang="ts">
import {
  PhHouse,
  PhCalendar,
  PhLightbulbFilament,
  PhGearSix,
} from "@phosphor-icons/vue";
import type { NavItem } from "~/type";

const navigation: NavItem[] = [
  {
    category: "MAIN MENU",
    data: [
      {
        url: "/",
        icon: PhHouse,
        title: "Home",
      },
      {
        url: "/calendar",
        icon: PhCalendar,
        title: "Calendrier",
      },
      {
        url: "/defis",
        icon: PhLightbulbFilament,
        title: "Défis",
      },
    ],
  },
  {
    category: "ACCOUNT CENTER",
    data: [
      {
        url: "/parameter",
        icon: PhGearSix,
        title: "Pamètres",
      },
    ],
  },
];
</script>
<template>
  <div class="w-full h-screen bg-[#F5F7FA] flex">
    <sidebar :navigation="navigation" />
    <div class="w-full h-full p-4">
      <slot />
    </div>
  </div>
</template>
