import getDataRouter from "./getData/getData.router.js"

function route(app) {
    app.use('/', getDataRouter)
}

export default route
