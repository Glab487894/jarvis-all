const request = require('request-promise');

console.log('howAreYou hes been connected');

 function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = getRandomInt(0, 100);



//How Are You ?
    			let howAreYou = function(){
    				const options = {
  						method: 'GET',
    					uri: 'http://localhost:7202/sf'
					}

					request(options)
				    .then(function (res) {
				    	let sistemFeeling = parseFloat(res);
				    	console.log(sistemFeeling);
				    	hay(sistemFeeling);
				    })
				    .catch(function (err) {
				    	console.log(err);
				    })
    			
				    	function hay(sistemFeeling){
	    				    if (sistemFeeling < 20) {
								text = (randomNumber < 50)? 'плохо' : 'жуть';
							}
							if (sistemFeeling > 20 && sistemFeeling < 40) {
								text = (randomNumber < 50)? 'не очень' : 'так себе';
							}
							if (sistemFeeling > 40 && sistemFeeling < 60) {
								text = (randomNumber < 50)? 'норм' : 'нормально';
							}
							if (sistemFeeling > 60 && sistemFeeling < 80) {
								text = (randomNumber < 50)? 'хорошо' : 'отлично';
							}
							if (sistemFeeling > 80) {
								text = (randomNumber < 50)? 'суппер' : 'класс';
							}
						}
						return(text);
    				}





exports.howAreYou = howAreYou;