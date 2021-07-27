##### ①，以 error 为例

```js
// success || error || warning

tips.error({
    del: true,  // 是否显示删除按钮
    loading: true,  // 进度条显示
    color:'aliceblue',  // 字体颜色
    delay: 3000,  // 关闭延迟时间
    info: '这是错误的弹出',
    success:function() {
        console.log('执行了回调')
    },
})

// 不传入对象会包含一些默认值  （所有属性都非必传）
```



##### ②，custom 自定义

```js
// 必须传入一个对象   
// 包含一些属性  （所有属性都非必传）

tips.custom({
     info: '自定义',
     background: '#fff',
     color: '#000',
     delay: 3000,
     boxShadow: '0 0 6px #ccc',
     borderRadius: '15px',
     del: true,
    loading:true,
     success:function() {
        console.log('执行了回调')
    }
})
```

