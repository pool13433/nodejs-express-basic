var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlEncodeParser = bodyParser.urlencoded({extened : false});
app.use(express.static('public'));

app.get('/',function(req,res){
	res.send('Hello World Express Framework');
});

app.get('/age',function(req,res){
	response = {
		age:req.query.age
	}
//	res.send(' Age ::=='+)
	res.end(JSON.stringify(response));
})
app.get('/form',function(req,res){
	res.sendFile(__dirname+"/"+"index.html");
});
app.post('/post',urlEncodeParser,function(req,res){
	response = {
		name : req.body.name,
		age : req.body.age
	}
	res.end(JSON.stringify(response));
});
var server = app.listen(9000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Hosting :: '+host+' port :: '+port)
});
