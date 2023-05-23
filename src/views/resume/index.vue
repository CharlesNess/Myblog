<template>
  <div class="page">
    <page1 :basicInformation="basicInformation" :jobIntention="jobIntention" :educationalBackground="educationalBackground" :skills="skills" :honor="honor" :project="project"></page1>
    <page2 :project="project" :evaluation="evaluation"></page2>
  </div>
</template>

<script>
import page1 from "@/components/page1.vue";
import page2 from "@/components/page2.vue";
export default {
  components: {
    page1,
    page2,
  },
  data() {
    return {
      basicInformation: {
        name: "左羿宽",   
        age: 24,
        gender: "男",
        address: "天津市",
        email: "406831828@qq.com",
        phone: "15833770890",
      },
      jobIntention: {
        position: "前端开发",
        salary: "面议",
      },
      educationalBackground: {
        graduationSchool: "南开大学滨海学院",
        graduationTime: "2021.06",
        major: "计算机科学与技术",
      },
      honor: ["2018年度校级奖学金", "2019年度校级奖学金"],
      skills: [
        "熟练使用HTML、CSS、JavaScript及ES6新特性，具有扎实的编程功底和良好的编码、写文档的习惯。",
        "熟练使用Vue 框架，利用 Vue 全家桶包含 Vue-cli+Vuex+VueRouter+Axios完成工程化开发。",
        "熟练掌握前后端数据交互，分离式开发，JSON数据解析，对Axios熟练使用。",
        "熟练使用 Element-ui、Vant、Ant-design 等组件库。",
        "熟练使用 Echarts、Swiper 等第三方插件",
        "掌握 CSS 预处理语言、Less、Sass 等，能够熟练设计移动端布局。",
        "掌握Git版本控制器，完成多人协同开发。",
        "了解前端工程化，对webpack有一定的熟悉度。",
        "了解 Node.js、PHP、MySQL 等相关知识。",
        "了解Java、C、C++等后端编程语言",
      ],
      project: {
        first: {
          title: "爱购商城后台管理系统",
          desc: "本项目是一个商城后台管理系统，主要有商品的增删改查功能，规格参数的增加与修改，以及订单列表的展示与导出功能。",
          duty: [
            "项目利用Vue-cli构建，同时集成了Element-ui组件与一些第三方依赖，包含pdf和Echarts等。",
            "使用Axios和后台进行交互，把后台数据呈现到页面中。",
            "商品模块的增删改查操作，包含upload图片上传、WangEditor富文本编辑框。",
            "订单列表Echarts图表数据展示、Excel导出。",
            "项目引入了Vue-pdf依赖，具有pdf的预览与打印功能",
            "路由守卫检测用户的登录状态实现页面的访问权限设置",
          ],
        },
        second: {
          title: "食疗微信小程序",
          desc: "本小程序是通过食物进行疗养的养生小程序。主要有四个tabbar，首页，食疗坊，购物车和我的。",
          duty: [
            "原生微信小程序",
            "首页包含轮播、列表数据动态获取、跳转详情页，详情页具有添加购物车。",
            "食疗坊包含搜索，城市定位功能。",
            "购物车包含购物车的删除，结算功能。",
            "我的包含授权头像，登录授权，联系客服，拨打电话功能。",
          ],
        },
        third: {
          title: "食疗微信小程序",
          desc: "本小程序是通过食物进行疗养的养生小程序。主要有四个tabbar，首页，食疗坊，购物车和我的。",
          duty: [
            "原生微信小程序",
            "首页包含轮播、列表数据动态获取、跳转详情页，详情页具有添加购物车。",
            "食疗坊包含搜索，城市定位功能。",
            "购物车包含购物车的删除，结算功能。",
            "我的包含授权头像，登录授权，联系客服，拨打电话功能。",
          ],
        },
      },
      evaluation: [
        "善于交际，生活中与班内每位同学打成一片，学习中善于与同学探讨问题。",
        "喜爱阅读，有利于提高自己知识层面和情商水平。",
        "有良好的心理素质，能正确的认识和评价自己。",
        "虚心接受他人的建议，善于总结经验教训、积极进取",
        "热爱前端，求知欲强，热衷于各种渠道提升前端技能", 
      ],
    };
  },
   mounted() {
     document.documentElement.scrollTop = 0
  },
}
</script>

<style>
</style>