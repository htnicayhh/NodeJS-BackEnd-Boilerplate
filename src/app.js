import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import config from './config/config.js'
import { STATUS } from './constant/status.js'
import getDataRouter from './component/router.js'
import route from './component/router.js'

const PORT = 3000
const app = express()

// Morgan
app.use(morgan('combined'))

// Body-Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


// Connecting to MySQL
route(app)

// App Listen
app.listen(PORT, () => {
    console.log(`Example app is listening at https://localhost:${PORT}`)
})