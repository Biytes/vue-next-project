<!--
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-01-18 15:38:45
 * @LastEditors: Biytes
 * @LastEditTime: 2021-03-03 15:15:06
 * @FilePath: \vue-next-project\src\views\Test.vue
-->
<template>
	<div class="test">
        <h1>test count: {{count}}</h1>
        <div>count * 2 = {{doubleCount}}</div>
        <button @click="add">add</button>

        <!-- <ref-compare-reactive :message="count"/> -->
	</div>
</template>

<script>
import { ref, watch, computed, getCurrentInstance } from 'vue'
import { createStore } from 'vuex'
import {
    useRouter,
    useRoute
} from 'vue-router'

export default {
    components: {
    },
	setup(props, context) {
        const instance = getCurrentInstance()

        const $router = useRouter()
        const $route = useRoute()


		const count = ref(0)

		console.log('count', count)
		const add = () => {
			count.value++
		}
	
		watch(() => count.value, val => {
			console.log(`count is ${val}`)
		})

		const doubleCount = computed(() => count.value * 2)

		return {
			count,
			doubleCount,
			add
		}
	}
}
</script>

