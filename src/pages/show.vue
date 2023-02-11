<template>
  <div>show</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from '@/stores/user'
const userStore = useUserStore();
const route = useRoute();
userStore.getCodeUser(route.query.code as any)

</script>

<style scoped></style>
