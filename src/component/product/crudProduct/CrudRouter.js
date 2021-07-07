import { Router } from "express"
import { errorHandler } from "../../../middleware/ErrorHandler"
import * as RestController from './CrudController'

const path = '/product'
const router = Router()

router.get('/search', errorHandler(RestController.getProductController))
router.put('/update', errorHandler(RestController.updateProductController))
router.post('/create', errorHandler(RestController.createProductController))
router.delete('/delete', errorHandler(RestController.deleteProductController))

export default { path, router }