
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendfile('views/index1.html');//, { title: 'Express' });
};