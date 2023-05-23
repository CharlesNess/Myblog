<template>
  <div class="page2">
    <div class="wrapper">
      <div class="project">
        <div class="subtitle">项目职责：</div>
        <ol class="list">
          <li v-for="(item, index) in project.first.duty" :key="index">
            {{ item }}
          </li>
        </ol>
        <div class="subtitle">项目二：</div>
        <div class="project-title">{{project.second.title}}</div>
        <div class="subtitle">项目描述：</div>
        <div class="project-desc">
          {{project.second.desc}}
        </div>
        <div class="subtitle">项目职责：</div>
        <ol class="list">
          <li v-for="(item, index) in project.second.duty" :key="index">
            {{ item }}
          </li>
        </ol>
      </div>
      <div class="project">
        <div class="subtitle">项目三：</div>
        <div class="project-title">{{project.third.title}}</div>
        <div class="subtitle">项目描述：</div>
        <div class="project-desc">
          {{project.third.desc}}
        </div>
        <div class="subtitle">项目职责：</div>
        <ol class="list">
          <li v-for="(item, index) in project.third.duty" :key="index">
            {{ item }}
          </li>
        </ol>
      </div>
      <div class="title">自我评价</div>
      <div class="line"></div>
      <ul class="evaluate">
        <li v-for="(item,index) in evaluation" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:["project","evaluation"],
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
.page2 {
  margin: 10px auto;
  padding: 20px 0;
  width: 800px;
  height: 1060px;
  background-color: #fff;
  .wrapper {
    margin: 0 50px;
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
    .project {
      margin: 20px 25px;
      font-size: 16px;
      .subtitle {
        margin: 4px 0;
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
    // .evaluate {
    //   margin: 20px 25px;
    // }
  }
}
</style>