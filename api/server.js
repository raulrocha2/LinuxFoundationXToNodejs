'user strict'
const { createServer } = require('http')

const data = JSON.stringify([
    {id: 'A1', name: 'Vacuum Cleaner', rpp: '99,99', info: 'The suckiest vacuum in the world'},
    {id: 'A2', name: 'Leaf Blowe', rpp: '30,33', info: 'This Product will blow your socks off'},
    {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
])
const server = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    res.end(data)
})
console.log('server running PORT:3000')
server.listen(3000)
