let order500 = function( orderType, pay, stock ){
	if ( orderType === 1 && pay === true ){
			console.log( '500 元定金预购，得到100 优惠券' );
	}else{
			return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递,解耦
	}
};

let order200 = function( orderType, pay, stock ){
	if ( orderType === 2 && pay === true ){
			console.log( '200 元定金预购，得到50 优惠券' );
	}else{
			return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
	}
};

let orderNormal = function( orderType, pay, stock ){
	if ( stock > 0 ){
			console.log( '普通购买，无优惠券' );
	}else{
			console.log( '手机库存不足' );
	}
};

let Chain = function( fn ){
	this.fn = fn;
	this.successor = null;
};

Chain.prototype.setNextSuccessor = function( successor ){
	return this.successor = successor;
};

Chain.prototype.passRequest = function(){
  
	let ret = this.fn.apply( this, arguments );//从执行chainOrder500开始，如果满足条件就会停止往下执行
	if ( ret === 'nextSuccessor' ){//如果执行chainOrder500没有满足条件就会返回nextSuccessor，执行下个函数
			return this.successor && this.successor.passRequest.apply( this.successor, arguments );
	}
	return ret;
};

//创建对象-节点
let chainOrder500 = new Chain( order500 );
let chainOrder200 = new Chain( order200 );
let chainOrderNormal = new Chain( orderNormal );

//将对象（节点）串成链
chainOrder500.setNextSuccessor( chainOrder200 );
chainOrder200.setNextSuccessor( chainOrderNormal );

//执行测试
chainOrder500.passRequest( 1, true, 500 ); // 输出：500 元定金预购，得到100 优惠券
chainOrder500.passRequest( 2, true, 500 ); // 输出：200 元定金预购，得到50 优惠券
chainOrder500.passRequest( 3, true, 500 ); // 输出：普通购买，无优惠券
chainOrder500.passRequest( 1, false, 0 ); // 输出：手机库存不足