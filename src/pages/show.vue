<template>
  <div>
    <img src="/0.png" style="width: 100%" alt="" />
    <button @click="qianBtn(appid)" v-if="!userStore.token.length">
      立即签到
    </button>
    <button @click="qianServerBtn">签到领豪礼</button>
    {{ $route.params }}
    <img src="/0.png" style="width: 100%" alt="" />
    <img src="/0.png" style="width: 100%" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { qianBtn } from "../utils/index";
const userStore = useUserStore();
const route = useRoute();
userStore.getCodeUser(route.query.code as any);

const wx: any = inject("wx");
const appid: any = inject("appId");
wx.ready(() => {});

const qianServerBtn = () => {
  fetch("");
};
</script>

<style scoped></style>
