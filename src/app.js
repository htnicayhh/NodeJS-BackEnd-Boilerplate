import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import routers from './component/router'
import { corsMiddleware } from './middleware/Cors.js'

const PORT = 3000
const app = express()
dotenv.config()

// Morgan
app.use(morgan('combined'))

// Body-Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// CorsOptions
app.use(corsMiddleware)


// initialize routers
for (const router of routers) {
    app.use(router.path, router.router)
}

// App Listen
app.listen(PORT, () => {
    console.log(`Example app is listening at https://localhost:${PORT}`)
})