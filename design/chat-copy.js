
function copyWithRange({ el }){
	if(!el || !document.createRange) return 'next'

	let range = document.createRange()
	range.selectNode(el)
	window.getSelection().addRange(range)

	const result = document.execCommand('copy')

	window.getSelection().removeAllRanges()
	return result
}

function copyWithClipEvent({ content }){
	function copy (e) {
			// content = `<${content}/>`
			e.clipboardData.setData('text/plain', content)
			e.preventDefault()
	}
	// 添加 copy 内容
	document.addEventListener('copy',copy)
	// 执行 copy 命令
	const result = document.execCommand('copy')
	// 移除绑定事件
	document.removeEventListener('copy',copy)
	return result
}

function copyWithInput({ content }){
	let aux = document.createElement('input')
	aux.setAttribute('value', content)
	document.body.appendChild(aux)

	aux.select()
	window.getSelection().toString()

	const result = document.execCommand('copy')
	document.body.removeChild(aux)

	return result
}

//职责链封装三个快捷复制的操作
function copyMethods({ content, el }){
	const fns = [
			copyWithRange,
			copyWithClipEvent,
			copyWithInput,
	]
	const fnChains = chain(fns)
	return fnChains({ content, el })
}

function after(fn, afterFn){
	return function(...args){
			const result = fn.apply(this, args)
			if(result === 'next'){
					return afterFn.apply(this, args)
			}
			return result
	}
}

function chain(fns){
	return fns.reduce((pre, next) => {
			return after(pre, next)
	})
}