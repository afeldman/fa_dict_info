require('dotenv').config();
var request = require('sync-request');

for (var i = 0; true; i++){
    var res = request('GET', "http://"+process.env.URL+":80/KAREL/DICTINFO?dict=" + process.env.DICT + "&dictno=" + i.toString());

    var dictentry = JSON.parse(res.getBody('utf8'));

    if (typeof dictentry.id !== 'undefined' ){
	console.log(dictentry);
    }else{
	break;
    }
}
