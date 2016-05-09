# angular-notify

demo: [http://cheiron1990.github.io/angular-notify/demo.html](http://cheiron1990.github.io/angular-notify/demo.html)

#### 使用说明

1. 在Angular之后引入js文件：
```html
<script src="scripts/dist/angular-notify.min.js"></script>
```
2. 在你的Angular App中引入模块：
```javascript
angular.module('yourApp', ['angularNotify']);
```
3. 在HTML中添加通知容器：
```html
<div notifybar style="position:absolute;top:0;right:0"></div>
```
4. 需要显示通知时触发事件，传入一个对象，包括type ( 可选的值：'success', 'info', 'warning', 'error' ), title 和可选的content:
```javascript
var notify = {
    type: 'success',
    title: 'Create Item Successful!',
    content: 'Item ( id: 2031 ) has already added to the list.'
};
$scope.$emit('notify', notify);
```


#### Guide

1. Import the js file after AngularJS:　
```html
<script src="scripts/dist/angular-notify.min.js"></script>
```
2. Import the module in your Angular App:
```javascript
angular.module('yourApp', ['angularNotify']);
```
3. Add a container into the html file:
```html
<div notifybar style="position:absolute;top:0;right:0"></div>
```
4. When you want to display a notify, trigger a _notify_ event, and pass an object as argument, this object should contain a type parameter(the value must be one of: 'success', 'info', 'warning', 'error'), a title parameter and an optional content parameter:
```javascript
var notify = {
    type: 'success',
    title: 'Create Item Successful!',
    content: 'Item ( id: 2031 ) has already added to the list.'
};
$scope.$emit('notify', notify);
```