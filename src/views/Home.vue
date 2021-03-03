<template>
  <div class="home">

    <div class="content">reactiveParams.test：{{ reactiveParams.test }}</div>

    <div class="content">test：{{ test }}</div>

    <div class="content">toRefsReactiveParams：{{ toRefTest }}</div>

    <button class="content" @click="changeReactiveParams">changeReactiveParams to 3</button>


    <section>
      <div>{{ objName }}</div>
      <button @click="handelClick">按钮</button>
    </section>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'

export default {
  name: 'home',
  setup() {
    const reactiveParams = reactive({
      test: 1,
      test2: 2
    })

    const toRefsReactiveParams = reactive({
      toRefTest: 1,
      toRefTest2: 2
    })

    const changeReactiveParams = _ => {
      reactiveParams.test = 3
      toRefsReactiveParams.toRefTest = 3
    }

    console.log('reactiveParams', reactiveParams)

    console.log('toRefs reactiveParams', { ...toRefs(reactiveParams) })

    console.log({...reactiveParams})
    
    return {
      ...reactiveParams,
      ...toRefs(toRefsReactiveParams),
      reactiveParams,
      changeReactiveParams
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: 10px 0 0;
}
</style>

