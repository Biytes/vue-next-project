/*
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-03-03 11:00:27
 * @LastEditors: Biytes
 * @LastEditTime: 2021-03-03 15:18:08
 * @FilePath: \vue-next-project\src\use\useMouse.js
 */
import { reactive, onMounted, onUnmounted, toRefs  } from 'vue'


export default function useMouse() {
    const state = reactive({
        x: 0,
        y: 0
    })

    const update = e => {
        state.x = e.pageX
        state.y = e.pageY
    }

    // 给window添加鼠标移动监听事件
    onMounted(_ => window.addEventListener('mousemove', update))

    // 给window删除监听事件
    onUnmounted(_ => window.removeEventListener('mousemove', update))

    // 转换key为响应式数据
    return toRefs(state)
}