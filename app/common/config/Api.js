function baseUrl (){
  let config = {
    protocol : 'http://',
    host : location.hostname,       //location.hostname
    port : (location.hostname === 'localhost')?8888:location.port,              //location.port
    endpoint : 'api',
  }

  return config.protocol + config.host + ':' + config.port + '/' + config.endpoint + '/'
}

export function httpGET (url,params){
  //console.log(baseUrl() + url);
  return $.get(baseUrl() + url , params)
}

export function httpPOST (url,params){
  return $.post(baseUrl() + url , params)
}

export function getRouter (){
  return {
    getHost : location.host,                                      //主机名和端口
    getHostname : location.hostname,                              //主机名
    getPath : location.hash.split('?')[0].substr(1),              //#号开始
    getPathname : location.pathname,                              //host之后?之前
    getSearch : location.search,                                  //?号之后
    getPort : location.port,                                      //端口
  }
}
