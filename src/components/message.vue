<template>
  <Transition mode="out-in">
    <section class="evirfy" v-if="modelValue" @click.self="cancel">
      <section class="box">
        <slot>
          <h3 class="box-title">礼品领取</h3>
          <p class="box-desc">请在<span style="color:red">签到处中储福森工作人员</span>面前签到，否则没有礼品哦！！！</p>
        </slot>
        <section class="box-footer">
          <div class="box-footer-left" @click.stop="cancel">取消</div>
          <div class="box-footer-right"><span @click.stop="confirm">确定</span></div>
        </section>
      </section>
    </section>
  </Transition>
</template>

<script lang='ts' setup>
defineProps<{
  modelValue: boolean
}>()

const emits = defineEmits(['update:modelValue', 'confirm'])

const cancel = () => emits('update:modelValue', false)
const confirm = () => {
  emits('confirm');
  cancel()
}
</script>

<style lang='less' scoped>
.evirfy{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
}
.box{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  height: 160px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  padding: 15px;
  &-title{
    text-align: center;
    margin-bottom: 10px;
  }
  &-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    &-left{
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      flex: 1;
    }
    &-right{
      flex: 1;
    }
  }
}
.v-enter-actvie, .v-leave-active{
  opacity: 1;
  transition: 1s;
}
.v-enter-from, .v-leave-to{
  opacity: 0;
}
</style>