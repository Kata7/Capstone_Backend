const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.port || 'development'
const config = require('./knexfile.js')[environment]
const knex = require('knex')(config)

const port = 8000

app.get('/', function(req, res, next){
  res.send('get')
})

app.post('/', function(req, res, next) {
  res.send('post')
})

app.patch('/', function(req, res, next) {
  res.send('patch')
})

app.delete('/', function(req, res, next) {
  res.send('delete')
})

app.listen(port, function() {
     console.log(`listening on port ${port}`)
})
