<template>
  <section class="header">首页</section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style scoped>
.header {
  position: absolute;
  right: 5%;
  top: 20px;
  z-index: 100;
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
}
</style>
