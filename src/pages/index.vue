<template>
  <section class="base">
    <img src="/index.png" style="width: 100%" alt="">
    <topTitle title="315·诚信护航" />
    <img src="/index-1.jpg" style="width: 100%" alt="" />
    <h4 class="base-text">中储福森集团旗下建材城各商家</h4>
    <h4 class="base-text">亮证经营·照章纳税·诚信315</h4>
    <topTitle title="百万家装补贴礼" />
    <img src="/index-2.jpg" style="width: 100%" alt="" />
    <h2 class="base-title" style="margin-top: 0;">1、签到红包“到场送”</h2>
    <p class="base-desc">现金红包劲爆来袭，凡活动落地当天到场客户转发活动推文至微信朋友圈内，即可在指定地点抽取开门红包一个，百分百有礼，活动限量先到先得。</p>
    <h2 class="base-title">2、下单满额“到场兑”</h2>
    <p class="base-desc">下单满额即可兑换精美水杯、雅鹿春季薄被、品牌空气炸锅，数量有限，领完即止</p>
    <h2 class="base-title">3、潮品建材“限时抢”</h2>
    <p class="base-desc">现场秒杀品牌五金，大牌五金最低1.6折起，限量秒杀先到先得</p>
    <h2 class="base-title">4、家具家电“现场抽”</h2>
    <p class="base-desc">下单满额即可参与家具家电现场抽奖，8888元家电大礼包（提货卡）、6666元家居大礼包（提货卡）、品牌电瓶车、品牌电饭煲等你来抽</p>
    <h2 class="base-title">5、终极豪礼“现场抽”</h2>
    <p class="base-desc">下单满额即可参与，抽取价值49999元免单权限，奢华家装等你带回家</p>
    <img src="/index-3.jpg" style="width: 100%; margin-top: 4px;" alt="" />
    <h2 class="base-title" style="text-align: center; margin-top: 0;">点击下方店名进入活动页面</h2>
  </section>
  <section class="init">
    <ami />
    <ami />
    <ami />
    <ami />
    <ami />
  </section>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import topTitle from "@/components/topTitle.vue";
import ami from "@/components/ami.vue";
const wx = inject("wx") as any;
wx.ready(() =>{
  wx.updateAppMessageShareData({
    title: '中储福森诚信315 李伯清助阵 质量保证', // 分享标题
    desc: '李伯清亲临现场 亮证经营 照章纳税', // 分享描述
    link: `http://192.168.2.116/`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
    imgUrl: 'https://www.zcfsjt.com/static/logo-small.png', // 分享图标
    success: function () {
      // 设置成功
    }
  })
  wx.updateTimelineShareData({ 
    title: '中储福森诚信315 李伯清助阵 质量保证', // 分享标题
    link: `http://192.168.2.116/`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
    imgUrl: 'https://www.zcfsjt.com/static/logo-small.png', // 分享图标
    success: function () {
      // 设置成功
    }
  })
})
</script>

<style lang="less" scoped>
.base{
  margin: 0 3%;
  &-title{
    font-size: 17px;
    font-weight: 600;
    color: rgb(182, 5, 5);
    margin-top: 10px;
  }
  &-text{
    font-size: 14px;
    color: rgb(182, 5, 5);
    font-weight: 600;
    text-align: center;
  }
  &-desc{
    font-size: 14px;
  }
}
.init{
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 6px;
}
</style>
