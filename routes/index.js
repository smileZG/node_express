/* 项目默认的路由，同时也是index的路由 */
var express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function(req, res){
	console.log('index', '请求 index 页面');
	res.render('index',{
		title:'Index'
	});
});

router.id = function(req, res){
	var title = req.params.id,
	id = title.toLowerCase();
	res.render(id,{
		title:title
	});
}

module.exports = router;