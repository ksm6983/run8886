const fs = require('fs')
const util = require('util')

util.log("aaaa", __dirname)

fs.readFile('test/test.json', 'utf-8', (err, data) => {
	if(err) return console.error(err)

	util.log("data >> ", data)
})

util.log("==========================================")

let data2 = fs.readFileSync('test/test.json', 'utf-8')
util.log("data2 >> ", data2)

util.log("222==========================================")
