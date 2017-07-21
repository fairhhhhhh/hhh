### ONE首页结构

#### 使用bootstrap结构

- 自己写的js css 文件要放到引入的bootstrap文件的下边！！！！
- 要引用jqurey文件 并放在引入bootstrap.min.js文件之前！！
```
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

响应式应用到 media
- 在手机端 是没有的 单独在css中写media
- 从大到小写(屏幕从大屏===>小屏)  css代码从上往下运行 会覆盖
- 要写后边
```
@media (max-width: @screen-sm-min) { 
小于    @screen-sm-min 统一为12px
font-size:12px;
 }

```
##### 响应式图片

```
<img src="..." class="img-responsive" alt="Responsive image">
```

##### 轮播图

-  要引入bootstrap.js
 
```
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- 下面的园按钮 -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- 窗口 -->
  <div class="carousel-inner" role="listbox">
  <!--item 是每一个图片 active 是显示当前-->
    <div class="item active">
      <img src="..." alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item">
      <img src="..." alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    ...
  </div>

  <!-- 左右控制按钮 -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

#### AJAX 获取数据
- 默认 为get 请求方式 异步请求
- data 为传入数据 //get可以不填
- success：function(){} 为返回数据 
- async : ture//false 
代码从上至下运行 
同步是完成一端代码 在进行下一段
异步是不用完成这一段代码 同时进行下面代码
```
$.ajax({
   type: "POST",
   url: "some.php",
   data: "name=John&location=Boston",
   success: function(msg){
     alert( "Data Saved: " + msg );
   }
});
```

#####数组 api 

slice() 
