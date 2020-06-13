const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');


const PORT = process.env.PORT || 3000;

const app = express();

	app.get('/',  function(req, res){
		//const info = await request.get('http://worldtimeapi.org/api/timezone/Europe/Ukrain');
		//console.log(info);
		//res.send(info);

		let now = new Date();
		console.log(now);
		let nowStr = now.toString();

		let dateA =  nowStr.split('T');
		console.log(dateA);

		res.status(200);
	});

app.listen(PORT, () => {
	console.log('SISTEM STARTED ON PORT 3000');
});

