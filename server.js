//include the http modeule in the program 
const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');

//define all the needed mime types 
const mimeTypes={
    'html':'text/html',
    'png':'image/png',
    'jpeg':'image/jpeg',
    'jpg':'image/jpg',
    'js':'text/javascript',
    'css':'text/css'
};


//definne the server name or ip  
const hostname='127.0.0.1';

//define the port to which the server would respond 
const port='3000';


//Create a server 
const server= http.createServer(function(req,res){
    var uri=url.parse(req.url).pathname;
    var fileName=path.join(process.cwd(),unescape(uri));
    res.statusCode=200;
    res.end(uri);
});

//write code to console making sure that it is logging the details to the console 
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});