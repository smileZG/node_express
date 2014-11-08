var express = require('express'),
    app = express();

var	PORT = process.env.PORT || 3000;
var PUB = __dirname + '/public',  //配置项目的一些static元素，css等
		VIEWS = __dirname + '/views'; //配置项目的 view

var routes = require('./routes/index'),
		test = require('./routes/test');

//设置端口号
app.set('port', PORT);   
//设置项目目录，具体指定 view 层的目录
app.set('views', VIEWS);  
//设置模板引擎
app.set('view engine', 'jade');
// app.use()

app.use('/',routes);
app.use('/index', routes);
app.use('/test', test);

app.listen(PORT);
console.log('Listening on :' + PORT);
// console.log(__dirname);