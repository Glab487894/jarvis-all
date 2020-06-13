const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');

const port = 7101;

const PORT = process.env.PORT || port;
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});


app.get('/personModels', function(req, res) {
	res.sendFile('db/personModels/personModels.json', {root: __dirname });
});


app.get('/plans', function(req, res){
	let mathod = req.query.mathod;
	let type = req.query.type;
	let time = req.query.time;
	let obj = req.query.obj;

	if (mathod == 'givePlan') {
		if (type == 'was'){
			res.sendFile('db/plans/was.json', {root: __dirname});
		}
		if (type == 'will'){
			res.sendFile('db/plans/will.json', {root: __dirname});
		}
		if (type == 'today'){
			res.sendFile('db/plans/today.json', {root: __dirname});
		}
		if (type == 'detail'){
			res.sendFile('db/plans/detail.json', {root: __dirname});
		}
	}
	if (mathod == 'newPlan') {
		if (type == 'was'){

		}
		if (type == 'will'){
			let file = JSON.parse(fs.readFileSync(path.join('./db/plans/will.json', 'utf8')));
			
			file.push(newObj);
		}
		if (type == 'today'){
			res.sendFile('db/plans/today.json', {root: __dirname});
		}
		if (type == 'detail'){
			res.sendFile('db/plans/detail.json', {root: __dirname});
		}
	}




});

	app.get('/authorization', function(req, res){
		let file = JSON.parse(fs.readFileSync(path.join('./db/authorization/authorization.json', 'utf8')));

	});


app.listen(PORT, () => {
	console.log('DB STRTED ON PORT 7101 ! ! !');
});

