import { Router } from 'express'
import { errorHandler } from '../../../middleware/ErrorHandler'
import { getAllProductController } from './ProductController'

const path = '/product'
const router = Router()

router.get('/all', errorHandler(getAllProductController))

export default { path, router }
