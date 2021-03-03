<!--
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-01-18 15:38:45
 * @LastEditors: Biytes
 * @LastEditTime: 2021-03-03 17:01:43
 * @FilePath: \vue-next-project\src\views\use-example.vue
-->
<template>
	<div class="use-example">
        <section class="mousemove"> x：{{ x }} y： {{ y }}</section>

        <section class="timer">tiemr: {{ time }}</section>
	</div>
</template>

<script>
import { ref, watch, computed, getCurrentInstance } from 'vue'
import useTime from '@/use/useTime'
import useMouse from '@/use/useMouse'

export default {
	setup(props, context) {

        const { x, y } = useMouse()

        const { time } = useTime('YYYY-MM-DD HH:mm:ss')

        console.log()
		return {
            x,
            y,
            time
		}
	}
}
</script>

<style lang="scss" scoped>
.timer {
    margin: 10px;
}
</style>
