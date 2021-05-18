const fs = require('fs');
const util = require('util');

util.log("aaaa", __dirname);

fs.readFile('test/test.json', 'utf-8', (err, data) => {
	if(err) return console.error(err)

	util.log("data >> ", data);
});

util.log("==========================================");

const msgfile = __dirname + '/message.txt';
const data = new Uint8Array(Buffer.from('Hello Node.js 안녕!!!'));
fs.writeFileSync(msgfile, data, (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});

let data2 = fs.readFileSync(msgfile, 'utf-8');
util.log("data2 >> ", data2);

util.log("222==========================================");
