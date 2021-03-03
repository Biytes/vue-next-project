<template>
  <div class="about">
    <h1>This is an computed page</h1>

    <section class="section-input">
      <span>FirstName：</span>
      <input type="text" v-model="firstName" />
    </section>

    
    <section class="section-input">
      <span>LastName：</span>
      <input type="text" v-model="lastName" />
    </section>

    <section class="section-display">
      fullName：{{ fullName }}
    </section>

    <section class="section-change">
      <button @click="changeFullName">变化姓名</button>
    </section>
  </div>
</template>

<script>
import { computed, toRefs, reactive } from 'vue'

export default {

  setup() {
    let state = reactive({
      firstName: '',
      lastName: '',
      count: 0
    })

    let fullName = computed({
      get: () => `${state.firstName} ${state.lastName}`,
      set: (value) => {
        console.log(value)
        let result = value.split(' ')
        state.firstName = result[0]
        state.lastName = result[1]
      }
    })

    let changeFullName = _ => {
      fullName = 'john tan'
    }

    return {
      ...toRefs(state),
      fullName,
      changeFullName
    }
  }
}
</script>
