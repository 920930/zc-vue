<template>
  <template v-if="userStore.token">
    <div class="info" v-if="me">
      <div class="user">
        <img class="user-avatar" :src="me.avatar" alt="" />
        <span><span style="color: red">{{ me.name }}</span> 欢迎来到{{name}}！</span>
      </div>
      <aside class="info-button" @click="$emit('update:show', true)" v-if="!me.sign">签到领精美礼品</aside>
      <p class="info-desc" v-if="!me.sign">请在工作人员面前签到，否则没有礼品哦</p>
      <p class="info-desc" v-if="!me.sign">请在工作人员面前签到，否则没有礼品哦</p>
      <p v-if="me.sign">
        感谢您的参与，你已在
        <span style="display: block; text-align: center; color: red;">{{ me.updatedAt }}</span>
        完成签到！
      </p>
    </div>
  </template>
  <div class="sign" v-else>
    <aside class="info-button" @click="qianBtn(appid)">登录领礼品</aside>
  </div>
</template>

<script lang='ts' setup>
import { inject } from "vue";
import { qianBtn } from "../utils/index";
import { useUserStore } from "@/stores/user";
import type { IUser } from "@/stores/user";
withDefaults(defineProps<{
  me: IUser | undefined;
  name: string;
  show: boolean
}>(), {
  show: false
})

defineEmits(['update:show'])
const userStore = useUserStore();
const appid: any = inject("appId");
</script>

<style lang="less" scoped>
.sign{
  text-align: center;
  margin-top: 10px;
}
.info{
  border: 5px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  border-radius: 2px;
  margin-bottom: 5px;
  font-size: 16px;
  &-button{
    display: inline-flex;
    padding: 1px 5px;
    border-radius: 5px;
    font-size: 20px;
    animation: infobtn 1s infinite;
    margin-bottom: 10px;
  }
  &-desc{
    font-size: 15px;
    text-align: center;
  }
}
.user{
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-bottom: 10px;
  &-avatar{
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }
}

@keyframes infobtn {
  from{
    color: rgb(165, 6, 6);
    border: 1px solid rgb(165, 6, 6);
    transform: scale(1);
  }
  50%{
    color: rgb(9, 204, 172);
    border: 1px solid rgb(9, 204, 172);
    transform: scale(1.1);
  }
  to{
    color: rgb(165, 6, 6);
    border: 1px solid rgb(165, 6, 6);
    transform: scale(1);
  }
}
</style>