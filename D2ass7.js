var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var p = url.parse(req.url,true).pathname;
	if(p != '/favicon.ico')
	{
	    var cdate = new Date();
	    var str = "Request received for "+p+" at "+cdate.toString()+"\n";
	    fs.appendFile("log.txt",str,function(err){
		if(!err) //success
		{
			console.log("log generated");
			res.writeHead(200,{'content-type':'text/html'});	
			res.write("Hey Aman, this request is logged into file");
			res.end();
		}
		else
		{	
			console.log(err.toString());
		}
	
	    });		
	}
});

server.listen(9700,function(){ console.log("server at 9700")});