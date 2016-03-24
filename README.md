# requirejs-domReady
测试并验证requirejs domReady事件的触发时间点

---

## html
``` html
<html>

<head>
    <title>requirejs domReady test</title>
</head>

<body>
    <img onload="console.log('image 1 loaded');" src="image1">
    <img onload="console.log('image 2 loaded');" src="image2">

    <script src="http://cdn.bootcss.com/jquery/2.2.0/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/require.js/2.1.18/require.min.js"></script>
    <script>
        require(['main.js'], function() {});
    </script>
</body>

</html>
```

## main.js
``` javascript
define([
    'domReady'
], function (domReady) {
    $(document).ready(function () {
        console.log(document);
        var childNodes = document.body.childNodes;
        console.log('childNodes number: ' + childNodes.length);
        for (var i = 0; i < childNodes.length; i++) {
            console.log(childNodes[i] + ': ' + childNodes[i].nodeType);
        }
        console.log('jquery domReady');
    });
    domReady(function () {
        console.log('requirejs domReady');
    });
});
```

## 运行结果
![qq 20160324152236](https://cloud.githubusercontent.com/assets/16483765/14011128/e66a667a-f1d6-11e5-967c-00b1857abb3c.png)

> **结论：**可以看到，jquery的ready方法在DOM树构建后即触发，而requirejs的domReady方法则是在所有资源被加载完毕之后触发，相当于window.onload。
