<template>
  <KeepAlive>
    <component :is="tabs[currentTab]">
      <loginVue :me="me" v-model:show="show" :name="company[currentTab].name"></loginVue>
      <template v-slot:qian>
        <loginVue :me="me" v-model:show="show" :name="company[currentTab].name"></loginVue>
      </template>
    </component>
  </KeepAlive>
  <Message v-model="show" @confirm="qianServerBtn"></Message>
</template>

<script lang="ts" setup>
import { inject, defineAsyncComponent, ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import type { IUser } from "@/stores/user";
import Message from "@/components/message.vue";
import loginVue from "@/components/login.vue";
const userStore = useUserStore();
const route = useRoute();
const url: any = inject('url');
const currentTab = ref(0);
const show = ref(false);
const wx: any = inject("wx");

const me = ref<IUser>()

const tabs = [
  defineAsyncComponent(() => import('../components/company/huayang.vue')),
  defineAsyncComponent(() => import('../components/company/dafeng.vue')),
  defineAsyncComponent(() => import('../components/company/xinfu.vue')),
  defineAsyncComponent(() => import('../components/company/xinhong.vue')),
  defineAsyncComponent(() => import('../components/company/jiafu.vue')),
]

const company = [
  {id: 1, name: '中储福森建材城华阳店', title: '【诚信315】中储福森建材城华阳店诚信315活动直通车', desc: '中储福森建材城华阳店诚信315 家装豪礼 全城派送 亮证经营·照章纳税'},
  {id: 2, name: '中储福森建材城大丰店', title: '【诚信315】中储福森建材城大丰店诚信315活动直通车', desc: '中储福森建材城大丰店诚信315 家装豪礼 全城派送 亮证经营·照章纳税'},
  {id: 3, name: '新福森林建材城', title: '【诚信315】中储福森新福森林建材城诚信315活动直通车', desc: '中储福森新福森林建材城诚信315 家装豪礼 全城派送 亮证经营·照章纳税'},
  {id: 4, name: '新红家居建材城', title: '【诚信315】中储福森新红家居建材城诚信315活动直通车', desc: '中储福森新红家居建材城诚信315 家装豪礼 全城派送 亮证经营·照章纳税'},
  {id: 5, name: '家福建材城', title: '【诚信315】中储福森家福建材城诚信315活动直通车', desc: '中储福森家福建材城诚信315 家装豪礼 全城派送 亮证经营·照章纳税'},
]

watch(() => route.params.id as string, (val) => {
  currentTab.value = Number.parseInt(val) - 1;
  document.title = company[currentTab.value].name
}, { immediate: true });

onMounted(() => {
  userStore.getCodeUser(route.query.code as any, url.value).then(() => {
    userStore.user && getUserInfo(userStore.user.openid)
  });
  wx.ready(() =>{
    wx.updateAppMessageShareData({
      title: company[currentTab.value].title, // 分享标题
      desc: company[currentTab.value].desc, // 分享描述
      link: `http://192.168.2.116/show/${company[currentTab.value].id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
      imgUrl: 'https://www.zcfsjt.com/static/logo-small.png', // 分享图标
      success: function () {
        // 设置成功
      }
    })
    wx.updateTimelineShareData({ 
      title: company[currentTab.value].title, // 分享标题
      link: `http://192.168.2.116/show/${company[currentTab.value].id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
      imgUrl: 'https://www.zcfsjt.com/static/logo-small.png', // 分享图标
      success: function () {
        // 设置成功
      }
    })
  })
})

const qianServerBtn = () => {
  fetch(`${url.value}/qian?company=${currentTab.value}`, {
    headers: {
      'authorization': userStore.token
    },
  })
    .then(ret => {
      let token = ret.headers.get('Authorization');
      if(token) userStore.setToken(token)
      return ret.json()
    })
    .then(ret => {
      userStore.setUser(1);
      userStore.user && getUserInfo(userStore.user.openid)
    })
    .catch(err => console.info(err))
};

const getUserInfo = async (openid: string) => {
  fetch(`${url.value}/show?openid=${openid}`)
    .then(ret => ret.json())
    .then(({data}) => {
      me.value = data
      console.log(data)
    })
}
</script>
