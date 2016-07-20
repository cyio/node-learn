const fs = require('fs')
const iconv = require('iconv-lite')

const rs = fs.createReadStream('test.md', {highWaterMark: 11})
let data = ''
let chunks = []
let size = 0
rs.on('data', (chunk)=>{
	chunks.push(chunk)
	size += chunk.length
})
rs.on('end', ()=>{
	const buf = Buffer.concat(chunks, size)
	const str = iconv.decode(buf, 'utf8')
	console.log(str)
})
