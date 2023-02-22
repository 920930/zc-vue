<template>
  <RouterView />
  <FooterVue />
</template>

<script setup lang="ts">
import { inject, ref, provide, readonly } from "vue";
import { RouterView } from "vue-router";
import { getConfig } from "@/utils/index";
import FooterVue from "./pages/footer.vue";

const wx: any = inject("wx");
const appId = ref("");
const url = ref("http://rcyzky.natappfree.cc");
provide("appId", readonly(appId));
provide("url", readonly(url));

getConfig(`${url.value}/init`, wx).then((ret) => (appId.value = ret.appId));
</script>
