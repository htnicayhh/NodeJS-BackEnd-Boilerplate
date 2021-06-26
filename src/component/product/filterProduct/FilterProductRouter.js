import { Router } from 'express'
import { errorHandler } from '../../../middleware/errorHandler'
import { filterProductController } from './FilterProductController'

const path = '/categories'
const router = Router()

router.get('/filter-product', errorHandler(filterProductController))

export default { path, router }