<template>
  <div class="btn" @click="codeBtn(1)">华阳店</div>
  <div class="btn" @click="codeBtn(2)">大丰店</div>
  <div class="btn" @click="codeBtn(3)">新红店</div>
  <div class="btn" @click="codeBtn(4)">家福店</div>
  <div class="btn" @click="codeBtn(5)">新红店</div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref, inject } from "vue";
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
const appId = inject<Ref<string>>("appId", ref(''));
const userStore = useUserStore();
const router = useRouter()

//转码url decodeURIComponent encodeURIComponent
const codeBtn = (id: number) => {
  const redirectUri = encodeURIComponent(location.href + `show/${id}`);
  if(userStore.user?.openid){
    return router.push('/show/' + id)
  }
  location.href =
    "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
    appId.value +
    "&redirect_uri=" +
    redirectUri +
    "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
};
</script>

<style scoped></style>
