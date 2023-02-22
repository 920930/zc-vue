<template>
  <section class="main">
    <section class="info">
      <section class="info-box">315</section>
      <div class="info-title">{{ title }}</div>
    </section>
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
.info{
  width: 160px;
  position: relative;
  display: flex;
  justify-content: center;
  &-box {
    width: 120px;
    height: 140px;
    color: white;
    margin: 14px 0;
    text-align: center;
    line-height: 96px;
    font-size: 60px;
    font-weight: 600;
    clip-path: polygon(0 20px, 30px 15px, 60px 0px, 90px 15px, 120px 20px, 120px 100px, 60px 140px, 0px 100px);
    animation: bginit infinite 2.5s;
  }
  &-title{
    position: absolute;
    left: 0;
    bottom: 37px;
    width: 100%;
    height: 40px;
    line-height: 26px;
    border-top: 7px solid rgb(175, 6, 6);
    border-bottom: 7px solid rgb(175, 6, 6);
    background-color: white;
    text-align: center;
    font-size: 20px;
    color: rgb(175, 6, 6);
    font-weight: 600;
  }
}

@keyframes bginit {
  from{
    background-color: rgb(185, 10, 10);
  }
  35%{
    background-color: rgb(54, 187, 13);
  }
  70%{
    background-color: rgb(209, 142, 18);
  }
  to{
    background-color: rgb(185, 10, 10);
  }
}
</style>