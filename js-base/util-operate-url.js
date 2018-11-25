function addQueryToUrl(key, value, type = 'location') {
  let url = '';
  type == 'location' ? url = location.href : url = location.hash

  if (url.indexOf('?') === -1) {
    url = `${url}?${key}=${value}`
  } else {
    const index = url.indexOf(key)
    if (index === -1) {
      url = url + '&' + `${key}=${value}`
    } else {
      // const re = "(\\?|^|&|\#)" +key+ "=([^&|^#]*)(&|$|#)"
      // url = url.replace(/(\\?|^|&|\#)type=([^&|^#]*)(&|$|#)/, "$1"+key+"="+value);
      const re = `(\\?|&|\#)${key}([^&|^#]*)(&|$|#)`
      url = url.replace(new RegExp(re), "$1" + key + "=" + value + '$3');
    }
  }
  if (type == 'location') {
    location.href = url
  }

  if (type == 'pushState') {
    history.pushState({},
      "",
      url
    );
  }
}

function getUrlQuery() {
  const qs = location.href.indexOf('?') === -1 ? '' : location.href.split('?')[1]
  const queryParams = qs ? qs.split('&') : []
  const queryValues = {}
  queryParams.map(item => {
    let values = []
    item.indexOf('=') !== -1 && (values = item.split('='))
    queryValues[values[0]] = values[1]
  })
  return queryValues
}

function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}