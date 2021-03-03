/*
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-03-03 17:12:02
 * @LastEditors: Biytes
 * @LastEditTime: 2021-03-03 17:12:39
 * @FilePath: \vue-next-project\src\use\useDebounce.js
 */

import { ref } from "vue"

export default function useDebounce(handler, time = 500) {
  const timer = ref()

  return (...args) => {
    if (timer.value) {
      clearTimeout(timer.value)
    }
    timer.value = setTimeout(handler.bind(null, ...args), time)
  }
}
