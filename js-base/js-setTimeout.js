let intervalId = null
function init() {
    this.refresh()
}

function refresh() {
   intervalId = setTimeout(() => {
		 this.getRefreshData()
	 }, 2000);
}

function getRefreshData() {
	console.log('start get data.....', intervalId)
	setTimeout(() => {
		console.log('get data.....')
		this.refresh()
	}, 100);
  
}

function stopRefresh() {
	console.log('stop....', intervalId)
	clearInterval(intervalId)
}

this.init()
setTimeout(() => {
	this.stopRefresh()
}, 5000);