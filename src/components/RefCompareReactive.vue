<!--
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-02-25 10:20:35
 * @LastEditors: Biytes
 * @LastEditTime: 2021-02-25 10:43:16
 * @FilePath: \vue-next-project\src\components\RefCompareReactive.vue
-->

<template>
  <div class="hello">
    <h1>{{ message }}</h1>

    <button @click="changeMessage">改变</button>
  </div>
</template>

<script>
import { defineComponent, toRef } from 'vue'

export default {
  name: 'RefCompareReactive',
  props: [message],

  setup(props) {

    const myTitle = toRef(props, 'message')
    let changeMessage = _ => {
        myTitle.value = 123
    }

    return {
        changeMessage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
