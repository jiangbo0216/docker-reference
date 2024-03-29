const express = require('express')
const redis = require('redis')
// const process = require('process')


const app = express()
const client = redis.createClient({
    host: 'redis-server',  // host name handle by docker
    port: 6379
})
client.set('visits', 0)

app.get('/', (req, res) => {
    // process.exit(0)
    client.get('visits', (err, visits) => {
        res.send('Numeber of visits ' + visits)
        client.set('visits', Number(visits) + 1)
    })
    
})

app.listen(8081, () => {
    console.log('listening on port 8080')
})