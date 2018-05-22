require('dotenv').config();
var http = require('http');

var stack = [];
stack.push('last');

function get_top() {
    var top = stack.pop();
    if (top != 'last')
	collection(top);
}


function collection(item){
    var path = "http://"+process.env.URL+":80/KAREL/DICTINFO?dict=" + process.env.DICT + "&dictno=" + item;

    console.log(path);
    
    http.get(path, function(res) {
	console.log("Got response: " + res.statusCode);
	
	var data = '';
	
	res.on("data", function(chunk) {
	    data += chunk;
	});
	
	res.on('end', function() {
	    console.log(data);
	});
	
    }).on('error', function(e) {
	console.log("Got error: " + e.message);
    });
}

for (var i = 0; i<=100;  i++) {
    stack.push( i.toString() );
}


get_top();

console.log();
