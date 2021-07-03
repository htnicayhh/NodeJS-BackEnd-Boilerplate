import { Router } from "express"
import { errorHandler } from "../../../middleware/ErrorHandler"
import * as RestController from './CrudController'

const path = '/categories'
const router = Router()

router.get('/filter-product', errorHandler(RestController.filterProductController))
router.put('/update-product', errorHandler(RestController.updateProductController))
router.post('/create-product', errorHandler(RestController.createProductController))
router.delete('/delete-product', errorHandler(RestController.deleteProductController))

export default { path, router }