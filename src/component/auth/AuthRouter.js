import { Router } from "express" 

import { errorHandler } from "../../middleware/ErrorHandler"
import { createToken, getUser, login, regist } from "./AuthController"
import { jwtToken } from "../../middleware/Authenticate"

const path = '/auth'
const router = Router()

// router.post('/login', errorHandler(login))
// router.post('/regist', errorHandler(regist))
router.post('/gettoken', errorHandler(createToken))
router.get('/infomation', jwtToken, errorHandler(getUser))

export default { path, router }

