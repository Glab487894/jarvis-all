const express = require('express');

const port = 7202;

const PORT = process.env.PORT || port;
const app = express();


let sf = [75];



app.get('/sf', function (req, res) {
	res.send(sistemFeeling);
})


app.listen(PORT, () => {
	console.log('SF STRTED ON PORT 7202 ! ! !');
});