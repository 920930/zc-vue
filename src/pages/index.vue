<template>
  <div class="btn">首页</div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
const appId = inject<Ref<string>>("appId", ref(""));
const userStore = useUserStore();
const router = useRouter();
</script>

<style scoped></style>
