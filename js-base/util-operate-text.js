//HTML标签转义（< -> &lt;）
function html2Escape(sHtml) {
	return sHtml.replace(/[<>&"]/g,function(c){
		return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];
	});
 }

 //HTML标签转义（< -> &lt;）
function html2Escape(sHtml) {
  var temp = document.createElement("div");
  (temp.textContent != null) ? (temp.textContent = sHtml) : (temp.innerText = sHtml);
  var output = temp.innerHTML;
  temp = null;
  return output;
}

//HTML标签反转义（&lt; -> <）
function escape2Html(str) {
  var temp = document.createElement("div");
  temp.innerHTML = str;
  var output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}

console.log(html2Escape('<a href="#">hahah</a>'))
console.log(escape2Html('&lt;a href="#"&gt;hahah&lt;/a&gt;'))
//https://github.com/Pines-Cheng/blog/issues/34