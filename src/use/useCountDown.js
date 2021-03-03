/*
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-03-03 11:23:14
 * @LastEditors: Biytes
 * @LastEditTime: 2021-03-03 17:42:50
 * @FilePath: \vue-next-project\src\use\useCountDown.js
 */

import { onMounted, reactive, toRefs } from 'vue'

export default function useTime (handler) {

    const state = reactive({ 
        remain: 60
    })

    onMounted(() => {
        setInterval(_ => state.remain -= 1, 1000)
    })

    return {
        ...toRefs(state),
    }
}