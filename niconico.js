module.exports.seiga = function(args, content) {
  var id = args[0];
  return '<iframe width="312" height="176" src="http://ext.seiga.nicovideo.jp/thumb/' + id + '" scrolling="no" style="border:solid 1px #888;" frameborder="0"><a href="http://seiga.nicovideo.jp/seiga/' + id + '"></a></iframe>';
};

module.exports.douga = function (args, content) {
  var id = args[0];
  return '<div><script type="text/javascript" src="http://ext.nicovideo.jp/thumb_watch/' + id + '"></script></div>';
}
