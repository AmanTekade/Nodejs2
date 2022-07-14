var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var url_p = url.parse(req.url,true);
	var path = url_p.pathname;	
	var filename = path.substring(1);	
	fs.readFile(filename, function(err, data){
		if(!err)
		{
			res.writeHead(200,{'content-type':'text/html'});
			res.write(data.toString());
			res.end();
		}
	});	

});

server.listen(9000,function(){console.log("server at 9000") });

////http://localhost:9000/home.html