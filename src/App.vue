<template>
  <HeaderVue />
  <RouterView />
  <FooterVue />
</template>

<script setup lang="ts">
import { inject, ref, provide, readonly } from "vue";
import { RouterView } from "vue-router";
import { getConfig } from "@/utils/index";
import FooterVue from "./pages/footer.vue";
import HeaderVue from "./pages/header.vue";

const wx: any = inject("wx");
const appId = ref("");
provide("appId", readonly(appId));

getConfig(wx).then((ret) => (appId.value = ret.appId));
</script>
