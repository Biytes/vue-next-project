<!--
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-03-03 10:46:44
 * @LastEditors: Biytes
 * @LastEditTime: 2021-03-03 15:10:18
 * @FilePath: \vue-next-project\src\components\NavHeader.vue
-->

<template>
  <div class="nav-header">
    <div class="item" v-for="(nav, index) in navList" :key="index">
        <router-link  :to="nav.path">
            {{ nav.title }}
        </router-link> 
        <span class="slash" v-if="index !== navList.length - 1" >|</span>
    </div>
  </div>
</template>

<script>
import { toRef } from 'vue'
export default {
  name: 'NavHeader',

  setup(props) {

    // 路由列表
    const navList = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'watch',
            path: '/watch'
        },
        {
            title: 'computed',
            path: '/computed'
        },
        {
            title: 'lifeCycle',
            path: '/lifeCycle'
        },
        // {
        //     title: 'Test',
        //     path: '/test'
        // },
        {
            title: 'UseExample',
            path: '/use-example'
        }
    ]

    return {
        navList
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-header {
  padding: 30px;

  .item {
      display: inline-block;

      .slash {
          padding: 0 5px;
      }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
