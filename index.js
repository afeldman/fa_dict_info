require('dotenv').config();
var request = require('sync-request');

for (var i = 0; true; i++){
    var res = request('GET', "http://"+process.env.URL+":80/KAREL/DICTINFO?dict=" + process.env.DICT + "&dictno=" + i.toString());

    var dictentry = JSON.parse(res.getBody('utf8'));

    if (typeof dictentry.id !== 'undefined' ){
	if (dictentry.id != -1){
	    console.log("id: " + directory.id);
	    if (directory.data !== null){
		console.log("data: " + dictentry.data);
	    }else{
		console.log("data is null");
	    }
	}else(
	    console.log(dictentry.reason);
	    break;
	)
    }else{
	break;
    }
}
