const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.port || 'development'
const config = require('./knexfile.js')[environment]
const knex = require('knex')(config)

const port = 8000

app.get('/', function(req, res, next){
  knex('restaurants')
  .then((rows) => res.status(200).send(rows))
  .catch(err => {
    next(err)
  })
})

app.post('/', function(req, res, next) {
  const username = req.body.username
  const address = req.body.address
  const city = req.body.city
  const state = req.body.state
  const geo_lat = req.body.geo_lat
  const geo_long = req.body.geo_long
  const distance = req.body.distance
  const cache = req.body.cache

  knex('users')
  .insert({ username: username, address: address, city: city, state: state, geo_lat: geo_lat, geo_long: geo_long, distance: distance, cache: cache})
  .then(() => res.status(200).send('user created'))
  .catch(err => {
    next(err)
  })
})

app.patch('/', function(req, res, next) {
  const id = req.body.id
  const username = req.body.username
  const address = req.body.address
  const city = req.body.city
  const state = req.body.state
  const geo_lat = req.body.geo_lat
  const geo_long = req.body.geo_long
  const distance = req.body.distance
  const cache = req.body.cache

  knex('users')
  .where({ id: id})
  .update({address: address, city: city, state: state, geo_lat: geo_lat, geo_long: geo_long, distance: distance, cache: cache})
  .then(() => res.status(200).send('update successful'))
  .catch(err => {
    next(err)
  })
})

app.delete('/', function(req, res, next) {
  res.send('delete')
})

app.listen(port, function() {
     console.log(`listening on port ${port}`)
})
