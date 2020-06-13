//===============================================================================
//                              Setings
//===============================================================================

const name = 'jarvis';




//sistemFeeling
//let sistemFeeling = 75;
//===============================================================================

//===========================file connection=====================================

const express = require('express');
const bodyParser = require("body-parser");
const request = require('request-promise');
const fs = require('fs');
const path = require('path');

//=========================functions==============================================

const dataTime = require('./functions/dataTime.js');
const howAreYou = require('./functions/howAreYou.js');


//---------------------------------------------------------------------------------

//=======================server building===========================================

const PORT = process.env.PORT || 3000;

const app = express();

//---------------------------------------------------------------------------------


const urlencodedParser = bodyParser.urlencoded({extended: false});

let dialogueStatus;



//=============================authorization==========================================


 function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}




app.get('/', function(req, res) {
    res.sendFile('html/authorization/authorization.html', {root: __dirname });
});

app.post('/authorization',  urlencodedParser, function (req, res) {



	let username = req.body.username;
	let password = req.body.password;

	console.log(username);
	console.log(password);


	if(username == 'glab_16'){
		if (password == 'qweasdzxc123456789') {
			res.sendFile('./html/main.html', {root: __dirname })
		} else {
			res.sendFile('./html/authorization/authorizationFalse.html', {root: __dirname })
		}
	} else {
		res.sendFile('./html/authorization/authorizationFalse.html', {root: __dirname })
	}

//-------------------------------------------------------------------------------------------


	app.get('/chat', function(req, res) {
		res.send(`<form method="post" action="http://localhost:3000/inputText"><input type="text" name="mainUserInput"><input type="submit" name="submit"></form>`);
	});

	app.post('/inputText', urlencodedParser, function(req, res) {
		var inputText = req.body.mainUserInput;
		console.log(username, ': ', inputText);
    	let text;
    	
    	let inputErray = inputText.split(' ');


    		if(dialogueStatus == 1){
    			if (inputErray[0] == 'как') {
    				if (inputErray[1] == 'дела') {
    					howAreYou();
    				}
    				if (inputErray[1] == 'ты') {
    					howAreYou()
    				}
    			}

    			if(inputErray[0] == 'каторый'){
    				if (inputErray[1] == 'час') {
    					dataTime('time');
    				}
    			}

    			if (inputErray[0] == 'какой') {
    				if (inputErray[2] == 'день') {
    					if (inputErray[1] == 'сегодня') {
    						dataTime('day', 0);
    					}
    					if (inputErray[1] == 'завтра') {
    						dataTime('day', 1);
    					}
    					if (inputErray[1] == 'послезавтра') {
    						dataTime('day', 2);
    					}
    				}
    			}

    		}else{
				if (inputText == 'привет') {
					var randomNumber = getRandomInt(0, 100);
					dialogueStatus = 1;
					text = (randomNumber < 50)? 'привет' : 'сдарова';
				}
		}



		console.log(name, ': ', text);
		//res.send(text + `<br /><br /><a href = 'http://localhost:3000/chat'> Назад </a>`);
		res.send(text + `<br /><br /><form method="post" action="http://localhost:3000/inputText"><input type="text" name="mainUserInput"><input type="submit" name="submit"></form>`);

	});


});



app.listen(PORT, () => {
	console.log('SISTEM STARTED ON PORT 3000');
});

