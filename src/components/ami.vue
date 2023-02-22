<template>
  <section class="box"></section>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

</script>

<style lang='less' scoped>
.box{
  display: inline-flex;
  width: 30px;
  height: 20px;
  background-color: rgb(182, 5, 5);
  clip-path: polygon(0 0, 8px 0, 15px 12px, 22px 0, 30px 0, 15px 20px);
  animation: ami 1.1s infinite both ease-out;
  margin: 0 5px;
}
/* 动画代码 */
@keyframes ami {
  from {transform: translateY(0);}
  50% {transform: translateY(10px);}
  to {transform: translateY(0);}
}
</style>