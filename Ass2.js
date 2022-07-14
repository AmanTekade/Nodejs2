var exp = require('express');
var app = exp();

app.get('/greet',function(req,res){
	res.send("<h1> Welcome to web App </h1>");
});
app.all('*',function(req,res){
	res.send("Invalid URL...");
});

app.listen(9005,function(){
	console.log("Express is at Port 9005");	
});
