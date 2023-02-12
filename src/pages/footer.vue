<template>
  <footer class="footer">
    <RouterLink
      :to="`/show/${item.id}`"
      class="link"
      v-for="item of navs"
      :key="item.id"
    >
      <i :class="`iconfont ${item.icon}`" style="font-size: 18px"></i>
      <span style="margin-top: -4px">{{ item.title }}</span>
    </RouterLink>
  </footer>
  <div style="height: 55px"></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const navs = [
  { id: 1, title: "华阳店", icon: "icon-dianpu" },
  { id: 2, title: "大丰店", icon: "icon-dianpu-" },
  { id: 3, title: "新福店", icon: "icon-dianpu1" },
  { id: 4, title: "新红店", icon: "icon-dianpu2" },
  { id: 5, title: "家福店", icon: "icon-dianpu-2" },
];
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.footer .link {
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
}
</style>
