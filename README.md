# angular-notify

demo: [http://cheiron1990.github.io/angular-notify/demo.html](http://cheiron1990.github.io/angular-notify/demo.html)

#### 使用说明

1. 引入样式表，墙内自己解决一下Google字体 -_-||| ，第二个是根据不同的主题，可以是angular-notify-texture, angular-notify-material, angular-notify-flat, angular-notify-bordered: 
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="styles/css/angular-notify-texture.min.css" id="notifyTheme">
```
2. 在jQuery和Angular之后引入js文件：
```html
<script src="scripts/dist/angular-notify.min.js"></script>
```
3. 在你的Angular App中引入模块：
```javascript
angular.module('yourApp', ['angularNotify']);
```
4. 在HTML中添加通知容器：
```html
<div notifybar style="position:absolute;top:0;right:0"></div>
```
5. 需要显示通知时触发事件，传入一个对象，包括type ( 可选的值：'success', 'info', 'warning', 'error' ), title 和可选的content:
```javascript
var notify = {
    type: 'success',
    title: 'Create Item Successful!',
    content: 'Item ( id: 2031 ) has already added to the list.'
};
$scope.$emit('notify', notify);
```


#### Guide

1. Import stylesheets. The different theme files are angular-notify-texture, angular-notify-material, angular-notify-flat and angular-notify-bordered: 
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="styles/css/angular-notify-texture.min.css" id="notifyTheme">
```
2. Import the js file after jQuery and AngularJS:　
```html
<script src="scripts/dist/angular-notify.min.js"></script>
```
3. Import the module in your Angular App:
```javascript
angular.module('yourApp', ['angularNotify']);
```
4. Add a container into the html file:
```html
<div notifybar style="position:absolute;top:0;right:0"></div>
```
5. When you want to display a notify, trigger a _notify_ event, and pass an object as argument, this object should contain a type parameter(the value must be one of: 'success', 'info', 'warning', 'error'), a title parameter and an optional content parameter:
```javascript
var notify = {
    type: 'success',
    title: 'Create Item Successful!',
    content: 'Item ( id: 2031 ) has already added to the list.'
};
$scope.$emit('notify', notify);
```