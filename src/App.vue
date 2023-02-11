<template>
  <header>
    <img src="/0.png" style="width: 100%" alt="">
  </header>

  <RouterView />
  <footer>中储福森集团</footer>
</template>

<script setup lang="ts">
import { inject, ref, provide, readonly } from "vue";
import { RouterView } from 'vue-router'
import { getConfig } from "@/utils/index";
const wx: any = inject("wx");
const appId = ref('')
provide('appId', readonly(appId))

getConfig(wx).then((ret) => appId.value = ret.appId);
</script>