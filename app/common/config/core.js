// $(function(){
//   var win = window;
//
//   var platform = win.location.hostname.substr(0,2) === 'mt' ? 'wx' : 'pc';
//
//   var Core = function(pf){
//     this.platform = pf;
//
//     this.rootClass();
//   }
//
//   Core.prototype.rootClass = function(){
//     var $root = $('#root');
//
//     this.platform === 'wx' &&
//     $root.attr('class','adaptation-mobile') ||
//     $root.attr('class','adaptation-1200')
//   }
//
//   win.Core = new Core(platform);
// })


  var win = window;

  var platform = win.location.hostname.substr(0,2) === 'mt' ? 'wx' : 'pc';

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

var c = new Core(platform);

export default  c;
