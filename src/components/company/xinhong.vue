<template>
  <img src="/banner-xh.jpg" style="width: 100%" alt="" />
  <div class="main">
    <p style="text-align: center; font-size: smaller;">中储福森315活动代言人：李伯清</p>
    <Topvue title="新福店活动直通车" />
    <h3 class="main-title">活动时间：2023年2月21日-3月12日</h3>
    <h3 class="main-title">落地时间：2023年3月12日 14:00</h3>
    <slot />
    <topTitle title="亮证经营·照章纳税" />
    <img src="/index-1.jpg" style="width: 100%" alt="" />
    <p>中储福森集团旗下建材城各商家统一亮证经营·照章纳税·诚信315</p>
    <topTitle title="千份签到红包到场送" />
    <img src="/show1.jpg" style="width: 100%" alt="" />
    <slot name="qian" />
    <p>活动落地当天到场客户，转发指定活动推文至微信朋友圈内，即可在指定地点抽取开门红包一个。</p>
    <p>限量300个，真金白银，先到先得。</p>
    <topTitle title="品牌家居现场兑" />
    <img src="/show2.jpg" style="width: 100%" alt="" />
    <p class="main-desc">单笔订单金额满315元即可领取精美水杯一个，限额300个。</p>
    <p class="main-desc">单笔订单金额满3150元即可兑换价值199元的雅鹿春季薄被，限额80个。</p>
    <p class="main-desc">单笔金额满12315元即可兑换价值299的空气炸锅，限额30个。</p>
    <p class="main-desc">活动当天客户凭订单（黄色联）进行以上礼品的兑换，一位客户领取一项礼品，不可重复、累积领取，数量有限领完为止。</p>
    <p>活动当天还有最低1.6折起的大牌五金限量秒杀活动，数量有限先到先得。</p>
    <topTitle title="家居家电现场抽" />
    <img src="/index-2.jpg" style="width: 100%" alt="" />
    <p class="main-desc">到场客户凭活动期间下单订单（蓝色联）并下单满315元，参与抽奖。</p>
    <p class="main-desc">提货卡可在市场销售电器、家具的商家处进行自由组合，该卡不兑现不找零，商家兑货后凭卡在市场管理部兑现。</p>
    <p class="main-desc">一等奖：5555元家电礼包/提货卡*1个</p>
    <p class="main-desc">二等奖：品牌电动车*5个</p>
    <p class="main-desc">三等奖：品牌电饭煲*15个</p>
    <topTitle title="免单大奖现场抽" />
    <img src="/show3.jpg" style="width: 100%" alt="" />
    <p class="main-desc">到场客户凭活动期间下单订单（蓝色联）并下单满315元，参与抽奖</p>
    <p class="main-desc">特等奖：免单权限*1（最高49999元）</p>
    <p class="main-desc">*1、免单额度按抽取订单实际交款金额的50%计算，最高可获得49999元免单。</p>
    <p>*2、免单权限最终价值以实际产生金额统计。</p>
  </div>
</template>

<script lang="ts" setup>
import Topvue from '../top.vue'
import topTitle from "@/components/topTitle.vue";
</script>

<style lang="less" scoped>
.main{
  margin: 0 3%;
  font-size: 16px;
  &-title{
    font-size: 15px;
    color: rgb(185, 10, 10);
    margin-bottom: 3px;
  }
  &-desc{
    margin-bottom: 16px;
  }
}
</style>
