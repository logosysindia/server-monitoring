var express = require('express'),
    app = express(),
    cors = require('cors'),
    server = require('http').createServer(app),
    exec = require('child_process').exec;

    app.get('/ls', function(req, res) {
        // console.log('accessed: /');
        // console.log('req:'+req);
        dir = exec("dir", function(err, stdout, stderr) {
          if (err) {
            // should have err.code here?
          }
          // console.log(stdout);
          res.send(stdout.replace(/(\r\n)/g, "<br/>"));
        });
    });
	
	 app.get('/createfolder', function(req, res) {
        // console.log('accessed: /');
        // console.log('req:'+req);
        dir = exec("md test", function(err, stdout, stderr) {
          if (err) {
            // should have err.code here?
          }
          // console.log(stdout);
          res.send(stdout.replace(/(\r\n)/g, "<br/>"));
        });
    });
	
	 app.get('/speedtest', function(req, res) {
        // console.log('accessed: /');
        // console.log('req:'+req);
        dir = exec("speedtest", function(err, stdout, stderr) {
          if (err) {
            // should have err.code here?
          }
          // console.log(stdout);
		  res.send(stdout.replace(/(\n)/g, "<br/>"));
        });
    });
	
	app.get('/', function(req, res) {
        // console.log('accessed: /');
        // console.log('req:'+req);
        
          // console.log(stdout);
          res.sendFile(__dirname+ "/test.html");

    });
	
	var cmd=require('node-cmd');
 
    cmd.get(
        'pwd',
        function(err, data, stderr){
            console.log('the current working dir is : ',data)
        }
    );

server.listen(3000, "127.0.0.1");
