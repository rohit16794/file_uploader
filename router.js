function route(handlers,pathname,response,request){
	console.log("About to route a request for :" +pathname);

	if(typeof handlers[pathname]==='function'){
		handlers[pathname](response,request);
	}
	else
		{	console.log("NO such function exists. :P ");
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write("404 Not Found");
			response.end();
		}
}

exports.route=route;