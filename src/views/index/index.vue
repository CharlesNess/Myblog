<template>
  <div>
    <div class="sticky" ref="sticky">
      <h1 @scroll.passive="allScrollTop" ref="h1">Welcom to zyk's Blog</h1>
      <router-link tag="div" to="/blog" class="tab-item-blog">Go to Blog</router-link>
      <router-link tag="div" to="/resume" class="tab-item-resume">Go to Resume</router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
     window.addEventListener('scroll', this.handleScroll)
     document.documentElement.scrollTop = 0
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (e) {
      let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      this.$refs.h1.style.setProperty('--percentage', `${scrolled * 100}%`)
    },
  }
}
</script>

<style>
  :root {
      --percentage: 0%;
    }

    body {
      background-color: #000;
      margin: 0;
      height: 130vh;
    }

    .sticky {
      position: sticky;
      top: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-y: auto;
    }

    h1 {
      color: #fff;
      font-family: Helvetica;
      margin: 0;
      padding: 0;
      font-size: 48px;
      letter-spacing: -0.3px;
      background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 66.67%, rgba(255, 255, 255, 0) 100%);
      background-position-x: calc(100% - var(--percentage));
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-size: 300% 100%;
    }
    .tab-item-blog {
      color: #fff;
      font-family: Helvetica;
      margin-top: 800px;
      padding: 0;
      font-size: 30px;
      letter-spacing: -0.3px;
      background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 89.67%, rgba(255, 255, 255, 0) 100%);
      background-position-x: calc(60% - var(--percentage));
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-size: 300% 100%;
    }
    .tab-item-resume {
      color: #fff;
      font-family: Helvetica;
      margin-top: 850px;
      padding: 0;
      font-size: 30px;
      letter-spacing: -0.3px;
      background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 89.67%, rgba(255, 255, 255, 0) 100%);
      background-position-x: calc(60% - var(--percentage));
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-size: 300% 100%;
    }
</style>