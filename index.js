require('dotenv').config();
var http = require('http');

var break_loop = false;
var stack = [];

var request = require('sync-request');
var res = request('GET', "http://"+process.env.URL+":80/KAREL/DICTINFO?dict=" + process.env.DICT + "&dictno=1");
console.log(res.getBody());
