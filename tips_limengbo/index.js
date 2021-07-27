import './index.css'

import success from './image/success.png'
import error from './image/error.png'
import warning from './image/warning.png'


class Tips {

    constructor() {
        const by = document.body
        const infoWrap = document.createElement('div')
        infoWrap.id = 'info-wrap'
        by.appendChild(infoWrap)
    }

    error(obj) { // 调用错误的提示
        if (!obj) {
            createEle({
                background: '#ea525e',
                info: '失败了呦！！！',
                delay: 3000,
                figure: error,
                del: true,
                loading: true,
                color: 'aliceblue'
            })
            return
        }
        let o = {}
        o.background = '#ea525e' // 背景颜色
        o.color = !obj.color ? 'aliceblue' : obj.color  // 字体颜色
        o.info = !obj.info ? '失败了呦！！！' : obj.info //提示信息
        o.delay = !obj.delay ? 3000 : obj.delay //删除时间
        o.success = !obj.success ? null : obj.success   // 结束的回调函数
        o.del = typeof obj.del && obj.del != false ? true : false  // 删除按钮显示
        o.loading = typeof obj.loading && obj.loading != false ? true : false
        o.figure = error
        createEle(o)
    }

    success(obj) {  //调用成功的提示
        if (!obj) {
            createEle({
                background: '#31d0a3',
                info: '操作成功！！！',
                delay: 3000,
                figure: success,
                del: true,
                loading: true,
                color: 'aliceblue'
            })
            return
        }
        let o = {}
        o.background = '#31d0a3' // 背景颜色
        o.color = !obj.color ? 'aliceblue' : obj.color  // 字体颜色
        o.info = !obj.info ? '操作成功！！！' : obj.info // 提示信息
        o.delay = !obj.delay ? 3000 : obj.delay // 删除时间
        o.success = !obj.success ? null : obj.success // 结束的回调函数
        o.del = obj.del && obj.del != false ? true : false  // 删除按钮显示
        o.loading = typeof obj.loading && obj.loading != false ? true : false
        o.figure = success
        createEle(o)
    }

    warning(obj) {
        if (!obj) {
            createEle({
                background: '#ffcc03',
                info: '请注意！！！',
                delay: 3000,
                figure: warning,
                del: true,
                loading: true,
                color: 'aliceblue'
            })
            return
        }
        let o = {}
        o.background = '#ffcc03' // 背景颜色
        o.color = !obj.color ? 'aliceblue' : obj.color  // 字体颜色
        o.info = !obj.info ? '请注意！！！' : obj.info // 提示信息
        o.delay = !obj.delay ? 3000 : obj.delay // 删除时间
        o.success = !obj.success ? null : obj.success // 结束的回调函数
        o.del = typeof obj.del && obj.del != false ? true : false  // 删除按钮显示
        o.loading = typeof obj.loading && obj.loading != false ? true : false
        o.figure = warning
        createEle(o)
    }

    custom(obj) { // 自定义
        if (!obj) {
            throw  {
                info: '需要一个对象--"custom({})",包含默认值为',
                background: '#fff',
                color: '#999',
                delay: 3000,
                boxShadow: '0 0 6px #ccc',
                borderRadius: '15px',
                del: true,
                loading: true
            }
            return
        }
        let o = {}
        o.background = !obj.background ? '#fff' : obj.background
        o.color = !obj.color ? '#999' : obj.color
        o.info = !obj.info ? '自定义' : obj.info
        o.delay = !obj.delay ? 3000 : obj.delay
        o.boxShadow = !obj.boxShadow ? '0 0 6px #ccc' : obj.boxShadow
        o.borderRadius = !obj.borderRadius ? '15px' : obj.borderRadius
        o.del = typeof obj.del && obj.del != false ? true : false  // 删除按钮显示
        o.loading = typeof obj.loading && obj.loading != false ? true : false
        o.success = !obj.success ? null : obj.success // 结束的回调函数
        createEle(o)
    }

}


const createEle = (o) => { // 生成元素
    const infoWrap = document.getElementById('info-wrap')
    const infoChild = document.createElement('div')
    infoChild.innerText = o.info

    let delay = o.delay

    var hide = setTimeout(hideFn, delay)

    if (o.loading) {

        var
            load,
            startTime = Date.now(),
            onwTime,
            diffTime = 0;


        const loading = document.createElement('span')
        infoChild.appendChild(loading)
        loading.style.position = 'absolute'
        loading.style.bottom = '0px'
        loading.style.left = '0px'
        loading.style.height = '4px'
        loading.style.background = 'linear-gradient(to right, rgb(234 83 95), rgb(255 204 4), #02f4af)'
        loading.style.zIndex = '999'
        const time = o.delay / 1000
        loading.style.animation = `loadingDy ${time}s linear forwards`


        // const enterFn = () => {
        //     onwTime = Date.now()
        //     load = loading.offsetWidth
        //     clearTimeout(hide)
        //     loading.style.animation = ''
        //     loading.style.width = load + 'px'
        //     if (document.styleSheets[0].cssRules.length == 12) document.styleSheets[0].deleteRule(11)
        // }
        //
        // const leaveFn = () => {
        //     diffTime += (onwTime - startTime)
        //     const d = o.delay - diffTime
        //     const dynamic = document.styleSheets[0]
        //     dynamic.insertRule(`@keyframes newLoadingDy{from{width:${load}px;}to{width:100%;}}`, 11)
        //     loading.style.animation = `newLoadingDy ${d / 1000}s linear forwards`
        //     hide = setTimeout(hideFn, d)
        //     startTime = Date.now()
        //
        //     // infoChild.removeEventListener('mouseenter', enterFn)
        //     // infoChild.removeEventListener('mouseleave', leaveFn)
        //
        // }
        //
        //
        // setTimeout(() => {
        //     infoChild.addEventListener('mouseenter', enterFn)
        //     infoChild.addEventListener('mouseleave', leaveFn)
        // }, 300)


    }

    infoChild.className = 'info-child'
    infoChild.style.background = o.background
    infoChild.style.color = o.color
    infoChild.style.boxShadow = o.boxShadow
    infoChild.style.borderRadius = o.borderRadius
    infoChild.style.backgroundImage = `url(${o.figure})`
    infoChild.style.backgroundRepeat = 'no-repeat'
    infoChild.style.backgroundSize = 'contain'
    infoChild.style.backgroundPosition = '45px'
    infoWrap.appendChild(infoChild)


    if (o.del) {
        const del = document.createElement('div')
        del.className = 'del'
        infoChild.appendChild(del)
        del.onclick = function () {
            infoChild.className = 'info-child hide'
            clearTimeout(hide)
            setTimeout(() => {
                infoChild.remove()
                if (o.success) {
                    o.success()
                    // clearTimeout(hide)
                }
            }, 570)
        }
    }


    function hideFn() {
        infoChild.className = 'info-child hide'
        setTimeout(() => {
            infoChild.remove()
            if (o.success) {
                o.success()
            }
        }, 570)
    }

}


const tips = new Tips()
export default tips


