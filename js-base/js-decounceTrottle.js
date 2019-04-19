/**
 * 节流
 * 多次触发函数，每隔指定时间执行一次
 */
function throttle(fn, delay) {
    let last;
		let setTimeoutId;

		return function() {
		 let that = this
		 let _args = arguments
		 now = +new Date()
		 
		 if(last&&now<last+delay)  {
		//  clearTimeout(setTimeoutId)
		//  setTimeoutId = setTimeout(function() {
		//  	last = now
		// 	 fn.apply(that, _args)
		//  }, delay)
		} else {
			last = now
		  fn.apply(that, _args)
		}
		
		}
}

/**
 * 防抖
 * 多次触发函数，不再触发函数时，指定时间间隔执行一次
 */
// function debounce(fn, timer=50) {
// 	 let flag = false
//    return function() {
// 		  clearTimeout(fn.id)
//       fn.id = setTimout(()=> {
// 				fn()
// 			}, timer)
// 	 }
// }

function debounce(fn, timer=3000) {
	return function() {
		let that = this
		let _args = arguments
		 clearTimeout(fn.id)
		 fn.id = setTimeout(function() {
			 fn.apply(that, _args)
		 }, timer)
	}
}