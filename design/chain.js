function Chain( Fn ) {
	this.nextRender = Fn || null;
}

Chain.prototype = {
	transmit: function () {
			if (this.nextRender) {
					this.nextRender.transmit()
			}
	}
};

// 添加事件
var bindEvent = new Chain({
	transmit: function () {
			console.log('-----bindEvent Start----');

			console.log('添加事件中...');

			console.log('-----bindEvent End----');
	}
});

// 创建dom
var creatDom = new Chain( bindEvent );

creatDom.transmit = function () {
	console.log('-----creatDom start----');

	console.log('添加dom中...');

	console.log('-----creatDom end----');
	Chain.prototype.transmit.call(this);

};

// 创建字符串
var domRender = new Chain( creatDom );

domRender.transmit = function () {
	console.log('-----domRender start----');

	console.log('创建dom字符串中...');

	console.log('-----domRender end----');
	Chain.prototype.transmit.call(this);

};
domRender.transmit()