require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')
const handle = require('./handlers')

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("hello, world")
})

app.use('/api/auth', routes.auth)
app.use('/api/polls', routes.poll)

app.use(handle.notFound)
app.use(handle.errors)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})