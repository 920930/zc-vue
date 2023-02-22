<template>
  <div style="display: inline-block;">{{ entTextInfo }}</div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
const props = withDefaults(defineProps<{
  endTime: string;
  endText?: string;
}>(), {
  endTime: '2023-02-15 16:00:00',
  endText: '活动正式开始'
})
const entTextInfo = ref('')
const timeDown = () => {
  const nowTime = new Date().getTime();
  const endTime = new Date(props.endTime).getTime();
  let endTotal = endTime - nowTime;
  if(endTotal > 0) {
    let date = Math.floor(endTotal / (24 * 60 * 60 * 1000));
    let hour = Math.floor((endTotal / (60 * 60 * 1000)) % 24);
    let min = Math.floor((endTotal / (60 * 1000)) % 60);
    let sec = Math.floor((endTotal / 1000) % 60);
    if(date > 0){
      entTextInfo.value = `${date}天${hour}小时${min}分${sec}秒`;
    }
    if(date <= 0 && hour > 0 ){
      entTextInfo.value = `${hour}小时${min}分${sec}秒`;
    }
    if(date <= 0 && hour <= 0){
      entTextInfo.value =`${min}分${sec}秒`;
    }
  } else {
    clearInterval(timer);
    entTextInfo.value = props.endText
  }
}

let timer = setInterval(timeDown, 1000)

</script>

<style lang='less' scoped>

</style>