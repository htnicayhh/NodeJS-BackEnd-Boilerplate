import { Router } from "express" 

import { errorHandler } from "../../middleware/ErrorHandler"
import { login, regist } from "./AuthController"

const path = '/auth'
const router = Router()

router.post('/login', errorHandler(login))
router.post('/regist', errorHandler(regist))

export default { path, router }

