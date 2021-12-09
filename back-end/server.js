const dotenv = require('dotenv').config()
const express = require('express')
const app = express()

const connectDB = require('./config/db')
const notes = require('../sampleData')
const userRoutes = require('./routes/userRoutes')

app.use(express.json())

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

connectDB()

//test route
app.get('/notes', (req, res) => {
  res.send(notes)
})

app.use('/api/user', userRoutes)

const port = process.env.PORT
app.listen(port, () => console.log(`Server is running at port ${port}`))
