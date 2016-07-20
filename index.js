const fs = require('fs')

const rs = fs.createReadStream('test.md', {highWaterMark: 11})
let data = ''
rs.on('data', (chunk)=>{
	data += chunk
})
rs.on('end', ()=>{
	console.log(data)
})
