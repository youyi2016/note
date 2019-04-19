/**
 * 限制字数 英文1个字符 中文2个字符
 */
function limitLength(e) {
	const input = e.target
	const value = input.value
	const split = value.split('')
	const map = split.map((s, i) => {
			return value.charCodeAt(i) >= 0 && value.charCodeAt(i) <= 128
					? 1
					: 2
	})
	let n = 0
	const charLength =
			map.length > 0 &&
			map.reduce((accumulator, currentValue, index) => {
					const count = accumulator + currentValue
					if (count === 31 || count === 32) {
							n = index
					}
					if (count > 32) {
							this.name = split.slice(0, n + 1).join('')
							// this.$emit("setUserName",split.slice(0, n+1).join(''));
					}
					return count
			})
}