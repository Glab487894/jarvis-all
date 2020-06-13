function dataTime(mode, timePlus){
					let now = new Date();
					let nowStr = now.toString();

					let [dateA, timeA] =  nowStr.split('T');

					let [day, month, date, year, time, other] = dateA.split(' ');

					if (mode == 'time') {
						text = time;
					}
					if (mode = 'day') {


//todayIndicator
						if (day == 'Mon') {
							let todayIndicator = 1;
							paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Tue') {
							let todayIndicator = 2;
							paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Wed') {
							let todayIndicator = 3;
							paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Thu') {
							let todayIndicator = 4;
							paymentDayIndicator(todayIndicator, timePlus);

						}
						if (day == 'Fri') {
							let todayIndicator = 5;
							paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Sat') {
							let todayIndicator = 6;
							paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Sun') {
							let todayIndicator = 7;
							paymentDayIndicator(todayIndicator, timePlus);
						}

//timePoint
						function paymentDayIndicator(today, timePlus){
							let dayIndicator = today + timePlus;
							callDay(dayIndicator);
						}

//dayIndicator
						
						function callDay(dayIndicator){
							if(dayIndicator == 1){
								mon();
							}
							if(dayIndicator == 2){
								tue();
							}
							if(dayIndicator == 3){
								wed();
							}
							if(dayIndicator == 4){
								thu();
							}
							if(dayIndicator == 5){
								fri();
							}
							if(dayIndicator == 6){
								sat();
							}
							if(dayIndicator == 7){
								sun();
							}
						}


							function mon(){
									text = (randomNumber < 50)? 'сегодня понедельнник':'понедельнник';
								}
							function tue(){
									text = (randomNumber < 50)? 'сегодня вторник':'вторник';
							}
							function wed(){
									text = (randomNumber < 50)? 'сегодня среда':'среда';
							}
							function thu(){
									text = (randomNumber < 50)? 'сегодня четверг':'четверг';								
							}
							function fri(){							
									text = (randomNumber < 50)? 'сегодня пятница':'пятница';							
							}
							function sat(){							
									text = (randomNumber < 50)? 'сегодня субота':'субота';							
							}
							function sun(){
									text = (randomNumber < 50)? 'сегодня васкресенье':'васкресенье';
							}
						}
    				}

console.log('dataTime hes been connected');

module.exports = dataTime;