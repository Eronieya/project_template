<template>
  <view class="content">
    <view class="header"> {{ hello }} </view>
    <image class="image" src="../../static/logo.png"></image>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const hello = ref("hello uniapp-vue3-ts");
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100rpx;

  .header {
    text-align: center;
    width: 100%;
  }
  .image {
    margin-top: 50rpx;
    width: 130rpx;
    height: 130rpx;
  }
}
</style>
