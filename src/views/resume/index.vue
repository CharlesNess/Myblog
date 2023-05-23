<template>
  <div>
    <div class="my">我的简历</div>
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
    <el-card class="box-card-two" shadow="always">
      <el-divider content-position="left">技能描述</el-divider>
      <div>
      <p>1. 掌握 HTML5 和 CSS3 新特性进行结构样式优化。</p>
      <p>2. 掌握 Vue、Vue CLI、Vuex、Vue-Router、VueUse，能够运用 Vue 全家桶进行组件化开发。</p>
      <p>3. 掌握 Vu3 的新特性新语法，可以使用 Vue3 新语法新特性进行各项组件开发。</p>
      <p>4. 熟悉 ES6新特性，熟悉使用 JavaScript 对 DOM 的操作，配合 Vue 框架进行高效率开发。</p>
      <p>5. 熟悉 Less、Sass 预编译语言，提升代码的灵活性和开发效率。</p>
      <p>6. 熟悉 Element-UI、Vant、等框架进行页面布局和响应式开发。</p>
      <p>7. 熟悉 Git 代码版本管理工具，使用 npm 管理项目所有依赖包。</p>
      <p>8. 熟悉 Cesium ，能够通过EarthSDK结合vue进行开发。</p>
      <p>9. 了解 node.js、vite、webpack、Apache ECharts、ESLint 及其他常用开发插件的使用。</p>
      </div>
    </el-card>
    <el-card class="box-card-three" shadow="always">
      <el-divider content-position="left">工作经历</el-divider>
      <span>北京星天地科技有限公司2020/04 - 2023/03 </span>
      <div>
      <p>1. 根据产品经理的需求，了解并掌握客户对项目需求，对新、老项目进行开发和维护。</p>
      <p>2. 与 UI 设计团队、后端开发团队紧密配合，确保项目协同开发、优化网站前端性能。</p>
      <p>3. 对前端代码进行优化、拆分，确保后期维护工作高效性。</p>
      <p>4. 总结项目中拆分的前端插件和组件，确保后期维护工作高效性。</p>
      <p>5.优化产品界面、逻辑，确保用户的高体验。</p>
      </div>
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
  .my {
    color: white;
    font-size: 40px;
    position: absolute;
    top: 5px;
    left: 30px;
  }
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
  .box-card-two {
    width: 480px;
    position: absolute;
    top: 80px;
    left: 670px;
    font-size: 18px;
    font-family: Helvetica;
  }
  .box-card-three {
    width: 480px;
    position: absolute;
    top: 80px;
    left: 1320px;
    font-size: 18px;
    font-family: Helvetica;
  }
  .text {
    margin-right: 330px;
  }
</style>