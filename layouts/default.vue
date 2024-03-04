<script setup lang="ts">
import {
  PhPower,
  PhHouse,
  PhCalendar,
  PhLightbulbFilament,
} from "@phosphor-icons/vue";
import type { NavItem } from "~/type";
const navigation: NavItem[] = [
  {
    url: "/",
    icon: PhHouse,
    title: "Home",
    color: "bg-[#BCE8D7]",
  },
  {
    url: "/calendar",
    icon: PhCalendar,
    title: "Calendrier",
    color: "bg-[#E1DBCB]",
  },
  {
    url: "/defis",
    icon: PhLightbulbFilament,
    title: "PhLightbulbFilament",
    color: "bg-[#B4EDF9]",
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
