<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view></router-view>
    <h1>黑马头条</h1>
    <div>
      <i class="toutiao toutiaodianzan"></i>
    </div>
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>