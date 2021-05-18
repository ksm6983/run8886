const express = require('express');
const app = express();
const testJson = require('./test/test.json');

// Init
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
	// res.send(testJson);
	res.render("index", { name: "홍길동" });
});

app.get('/test/:email', (req, res) => {
	testJson.email = req.params.email;
	testJson.aa = req.query.aa;
	// res.send(testJson); 
	res.json(testJson);
});

// Run
const server = app.listen(7000, function(){
	console.log("7000포트로 express 시작하기");
});
