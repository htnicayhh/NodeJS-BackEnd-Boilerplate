import { Router } from "express"
import { errorHandler } from "../../../middleware/errorHandler"
import * as RestController from './CrudController'

const path = '/categories'
const router = Router()

router.get('/filter-product', errorHandler(RestController.filterProductController))
router.delete('/delete-product', errorHandler(RestController.deleteProductController))

export default { path, router }