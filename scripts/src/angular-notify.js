var AngularNotifyModule = angular.module('angularNotify', ['ng']);
// 事件监听绑定到rootScope的装饰器
AngularNotifyModule.config(['$provide', function($provide){
	$provide.decorator('$rootScope', ['$delegate', function($delegate){
		Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
			value: function(name, listener){
				var unsubscribe = $delegate.$on(name, listener);
				this.$on('$destroy', unsubscribe);

				return unsubscribe;
			},
			enumerable: false
		});

		return $delegate;
	}]);
}]);

AngularNotifyModule.directive('notifybar', [
	function(){
		return {
			restrict: 'EAC',
			link: function(scope, elem, attrs){
				var createNotify = function(notifyData){
					notifyContainer = document.createElement('div');
					var title = document.createElement('p');
					title.className += ' title';
					title.innerHTML = notifyData.title;
					notifyContainer.appendChild(title);
					if( typeof notifyData.content == 'string' && notifyData.content.length !== 0 ){
						var content = document.createElement('p');
						content.className += ' content';
						content.innerHTML = notifyData.content;
						notifyContainer.appendChild(content);
					}
					var closeBtn = document.createElement('button');
					closeBtn.className += ' close';
					closeBtn.innerHTML = '<i class="material-icons">close</i>';
					closeBtn.addEventListener('click',function(){
						notify.hideFunc();
					});
					notifyContainer.appendChild(closeBtn);
					notifyContainer.className += 'angular-notify';
					switch(notifyData.type){
						case 'success':
							notifyContainer.className += (' angular-notify' + '-success');
							break;
						case 'info':
							notifyContainer.className += (' angular-notify' + '-info');
							break;
						case 'warning':
							notifyContainer.className += (' angular-notify' + '-warning');
							break;
						case 'error':
							notifyContainer.className += (' angular-notify' + '-error');
							break;
					}
					notifyContainer.className += ' angular-notify-enter';

					var notify = {
						domElem: notifyContainer,
						removeDom: function(){
							$(this.domElem).remove();
						},
						hideFunc : function(){
							$(this.domElem).removeClass('angular-notify-enter');
							$(this.domElem).addClass('angular-notify-hide');
							setTimeout(function(){notify.removeDom();}, 320);
						}
					};

					return notify;
				};
				scope.$onRootScope('notify',function(e,notifyData){
					if($.inArray(notifyData.type, ['success', 'info', 'warning', 'error']) !== -1){
						if( typeof notifyData.title == 'string' && notifyData.title.length !== 0){
							var notify = createNotify(notifyData);
							var timeout = notifyData.timeout || 3200;
							elem[0].appendChild(notify.domElem);

							var timeoutID = setTimeout(function(){notify.hideFunc();}, timeout);
							$(notify.domElem).mouseenter(function(){
								window.clearTimeout(timeoutID);
							}).mouseleave(function(){
								timeoutID = setTimeout(function(){notify.hideFunc();}, timeout);
							});
						}
					}
				});
			}
		};
	}
]);