import { Router } from "express"
import { errorHandler } from "../../../middleware/errorHandler"
import * as RestController from './CrudController'

const path = '/categories'
const router = Router()

router.get('/filter-product', errorHandler(RestController.filterProductController))
router.put('/update-product', errorHandler(RestController.updateProductController))

export default { path, router }