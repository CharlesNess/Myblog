<template>
  <div class="page1">
    <div class="header">个人简历</div>
    <div class="wrapper">
      <div class="title">基本信息</div>
      <div class="line"></div>
      <div class="content">
        <div class="item">
          姓&nbsp;&nbsp;名：<span class="info">{{
            basicInformation.name
          }}</span>
        </div>
        <div class="item">
          年&nbsp;&nbsp;龄：<span class="info">{{ basicInformation.age }}</span>
        </div>
        <div class="item">
          性&nbsp;&nbsp;别：<span class="info">{{
            basicInformation.gender
          }}</span>
        </div>
        <div class="item">
          现居地址：<span class="info">{{ basicInformation.address }}</span>
        </div>
        <div class="item">
          邮&nbsp;&nbsp;箱：<span class="info">{{
            basicInformation.email
          }}</span>
        </div>
        <div class="item">
          联系电话：<span class="info">{{ basicInformation.phone }}</span>
        </div>
      </div>
      <div class="title">求职意向</div>
      <div class="line"></div>
      <div class="content">
        <div class="item">
          意向岗位：<span class="info">{{ jobIntention.position }}</span>
        </div>
        <div class="item">
          期望薪资：<span class="info">{{ jobIntention.salary }}</span>
        </div>
      </div>
      <div class="title">教育背景</div>
      <div class="line"></div>
      <div class="content">
        <div class="item">
          毕业学校：<span class="info">{{
            educationalBackground.graduationSchool
          }}</span>
        </div>
        <div class="item">
          毕业时间：<span class="info">{{
            educationalBackground.graduationTime
          }}</span>
        </div>
        <div class="item">
          大学专业：<span class="info">{{ educationalBackground.major }}</span>
        </div>
      </div>
      <div class="title">荣誉证书</div>
      <div class="line"></div>
      <ul class="list">
        <li v-for="(item, index) in honor" :key="index">{{ item }}</li>
      </ul>
      <div class="title">相关技能</div>
      <div class="line"></div>
      <ul class="list">
        <li v-for="(item, index) in skills" :key="index">{{ item }}</li>
      </ul>
      <div class="title">项目经验</div>
      <div class="line"></div>
      <div class="project">
        <div class="subtitle">项目一：</div>
        <div class="project-title">{{project.first.title}}</div>
        <div class="subtitle">项目描述：</div>
        <div class="project-desc">
          {{project.first.desc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["basicInformation","basicInformation","jobIntention" ,"educationalBackground" ,"skills" ,"honor" ,"project"],
};
</script>

<style lang="less" scoped>
.page1 {
  margin: 0 auto;
  width: 800px;
  height: 1100px;
  background-color: #fff;
  .header {
    text-align: center;
    height: 45px;
    line-height: 45px;
    background-color: rgb(65, 65, 65);
    color: #fff;
    font-size: 20px;
  }
  .wrapper {
    margin: 20px 50px;
    .title {
      width: 120px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 18px;
      font-weight: normal;
      background-color: rgb(65, 65, 65);
      color: #fff;
    }
    .line {
      border-top: 2px solid rgb(65, 65, 65);
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      margin: 20px 25px;
      font-size: 16px;
      font-weight: bold;
      .item {
        width: 50%;
        height: 25px;
        line-height: 25px;
        .info {
          font-weight: normal;
        }
      }
    }
    // .list {
    //   font-size: 16px;
    //   margin: 20px 25px;
    // }
    .project {
      margin: 20px 25px;
      font-size: 16px;
      .subtitle {
        margin: 2px 0;
        font-weight: bold;
      }
      .project-title {
        text-align: center;
        font-weight: bold;
      }
      .project-desc {
        text-indent: 2em;
      }
    }
  }
}
</style>