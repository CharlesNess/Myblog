<template>
  <div>
    <el-card class="box-card" shadow="always">
      <el-divider content-position="left">姓名</el-divider>
      <span class="text">左羿宽</span>
      <el-divider content-position="left">年龄</el-divider>
      <span class="text">24</span>
      <el-divider content-position="left">邮箱</el-divider>
      <i class="el-icon-message">406831828@qq.com</i>
      <el-divider content-position="left">GitHub</el-divider>
      <img src="@/assets/github.png"><span>https://github.com/CharlesNess/Myblog</span>
      <el-divider content-position="left">手机号</el-divider>
      <img src="@/assets/phone.png"><span>15833770890</span>
      <el-divider content-position="left">技能树</el-divider>
      <div>css<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress></div>
      <div>javascript<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress></div>
      <div>vue2<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress></div>
      <div>vue3<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress></div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
     document.documentElement.scrollTop = 0
  },
}
</script>

<style>
  .item {
    padding: 18px 0;
  }
  .box-card {
    width: 480px;
    position: absolute;
    top: 80px;
    left: 20px;
    font-size: 18px;
    font-family: Helvetica;
  }
  .text {
    margin-right: 330px;
  }
</style>