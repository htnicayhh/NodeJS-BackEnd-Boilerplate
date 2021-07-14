import { Router } from 'express'
import { errorHandler } from '../../constant/Errors'
import { jwtToken } from '../../middleware/Authenticate'
import { isAdmin } from '../../middleware/Authorize'
import { 
    getUserController,
    getAllUserController,
    updateUserController
} from './UserController'

const path = '/user'
const router = Router()

router.get('/me', jwtToken, errorHandler(getUserController))
router.get('/all', jwtToken, isAdmin, errorHandler(getAllUserController))
router.put('/update-me', jwtToken, errorHandler(updateUserController))

export default { path, router }
