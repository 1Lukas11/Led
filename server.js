var http = require("http");
var port = 8686;

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

http.createServer(function(req,res){
  console.log('New incoming client request for ' + req.url);
  res.writeHeader(200, {'Content-Type': 'application/json'}); //#A
  switch(req.url) { //#B
    case '/Led':
      // And return the corresponding JSON
      Console.log("richtig");
      const spawn = require("child_process").spawn;
      const pythonProcess = spawn('python',["/fadeled.py", "-c"]);
      break;
    case '/light':
      res.write('{"light" :' + randomInt(1, 100) + '}');
      break;
    default:
      res.write('{"hello" : "world"}');
  }
  res.end();  //#D
}).listen(port);
console.log('Server listening on http://localhost:' + port);

//#A Setting the header to announce we return JSON representations
//#B Read the request URL and provide responses accordingly
//#C Write the temperature result as JSON
//#D Causes to return the results to the client