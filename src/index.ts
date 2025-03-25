import express from 'express'
import dotenv from 'dotenv'
import { connect } from './config/database'

// Load environment variables from .env file
dotenv.config()

const PORT = process.env.PORT || 3000

connect()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})