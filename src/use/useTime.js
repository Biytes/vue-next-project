/*
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-03-03 11:23:14
 * @LastEditors: Biytes
 * @LastEditTime: 2021-03-03 16:32:35
 * @FilePath: \vue-next-project\src\use\useTime.js
 */

import { onMounted, reactive, toRefs } from 'vue'
import dayjs from 'dayjs'

export default function useTime (format) {

    const state = reactive({ 
        time: dayjs(new Date()).format(format)
    })

    onMounted(() => {
        setInterval(_ => state.time = dayjs(new Date()).format(format), 1000)
    })

    console.log('state', state)

    console.log('toRefs', toRefs(state))

    return toRefs(state)
}