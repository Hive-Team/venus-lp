$(function(){
  var win = window;
  var platform = win.location.hostname.substr(0,1) === 'm' ? 'wx' : 'pc';

  var Core = function(pf){
    this.platform = pf;

  }

  Core.prototype.method = function(){

  }

  win.Core = new Core(platform);
})
