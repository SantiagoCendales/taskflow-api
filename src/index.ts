import express from 'express'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})