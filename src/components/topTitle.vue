<template>
  <section class="main">
    <section class="box">{{ title }}</section>
  </section>
</template>

<script lang='ts' setup>
defineProps<{
  title: string
}>()
</script>

<style lang="less" scoped>
.main{
  display: flex;
  justify-content: center;
}
.box {
  position: relative;
  width: 180px;
  height: 32px;
  background: white;
  margin: 14px 0;
  text-align: center;
  line-height: 30px;
  font-size: 19px;
  font-weight: 600;
  filter: drop-shadow(0px 0px 0.5px #000);
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 32px;
    top: 0;
    right: -25px;
    background: 
      linear-gradient(-45deg, transparent 20px,  white 20px, white 100%),
      linear-gradient(-135deg, transparent 20px, white 20px, white 100%);
    background-size: 32px 20px;
    background-repeat: no-repeat;
    background-position: 0 bottom, 0 top;
  }
  &::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 32px;
    top: 0;
    left: -25px;
    background: 
      linear-gradient(45deg, transparent 15px, white 10px, white 100%),
      linear-gradient(135deg, transparent 15px, white 10px, white 100%);
    background-size: 32px 20px;
    background-repeat: no-repeat;
    background-position: 0 bottom, 0 top;
  }
}

</style>