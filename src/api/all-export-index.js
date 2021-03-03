/*
 * @Description: 
 * @Author: Biytes
 * @Date: 2021-03-03 16:35:42
 * @LastEditors: Biytes
 * @LastEditTime: 2021-03-03 16:57:19
 * @FilePath: \vue-next-project\src\use\index.js
 */

//  统一导出use方法

const _use = () => {
    let use = {}

    const requireUseMethods = require.context(
        // 当前目录
        '.',
        // 是否查询其子目录
        false,

        // 匹配API模块文件名的正则表达式
        /\.\/(?!index).*\.js$/
    )

    console.log('requireUseMethods', requireUseMethods)

    requireUseMethods.keys().forEach(fileName => {
        const method = requireUseMethods(fileName)

        const methodName = fileName
            .split('/')
            .pop()
            ?.split('.')
            .shift();

        use[methodName] = method.default || method
    })

    return use
}

const use = _use()

export default use