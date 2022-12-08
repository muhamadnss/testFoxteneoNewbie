const express = require('express')
const app = express()
const port = 8080
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.unsubscribe(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

require('./app/routes.js')(app)

app.listen(port)
console.log("Server has been started on port: " + port)