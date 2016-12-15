var http = require("http");
var url =require("url");


//var datachunk="";

function start(route, handle) {

function onRequest(request, response) {
var pathname = url.parse(request.url).pathname;
console.log("Request for " + pathname + " received.");
route(handle, pathname, response, request);
}



/*request.addListener("data",function(chunk){
datachunk+=chunk;
});

request.addListener("end",function(){
	route(handlers,pathname,response,datachunk);	
});*/
/*response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();*/


/*http.createServer(onRequest).listen(8888);*/
//console.log("Server has started.");

http.createServer(onRequest).listen(3000);
console.log("Server has started.");
}

exports.start=start;
