const dotenv = require('dotenv').config()
const express = require('express')
const notes = require('../sampleData')
const app = express()

//Enabling CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization,userId,authToken'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    return res.status(200).json({})
  }
  next()
})

app.get('/', (req, res) => {
  res.send(notes)
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server is running at port ${port}`))
