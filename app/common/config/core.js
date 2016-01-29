// $(function(){
//   var win = window;
//   var platform = win.location.hostname.substr(0,1) === 'm' ? 'wx' : 'pc';
//   // trip.jsbn.love
//
//   var Core = function(pf){
//     this.platform = pf;
//
//   }
//
//   Core.prototype.method = function(){
//
//   }
//
//   win.Core = new Core(platform);
// })
$(function(){
  var win = window;
  var platform = win.location.hostname.substr(0,2) === 'wx' ? 'wx' : 'pc';

  var Core = function(pf){
    this.platform = pf;

    this.rootClass();
  }

  Core.prototype.rootClass = function(){
    var $root = $('#root');

    this.platform === 'wx' &&
    $root.attr('class','adaptation-mobile') ||
    $root.attr('class','adaptation-1200')
  }

  win.Core = new Core(platform);
})
