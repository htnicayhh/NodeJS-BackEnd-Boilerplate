import { Router } from 'express'
import { errorHandler } from '../../middleware/ErrorHandler'
import { jwtToken } from '../../middleware/Authenticate'
import { isAdmin } from '../../middleware/Authorize'
import { Pagination } from '../../middleware/Pagination'
import {
    getAllProductController,
    getProductByIDController,
    createProductController,
    deleteProductController,
    searchProductController,
    updateProductController
} from './ProductController'

const path = '/product'
const router = Router()

router.get('/all', jwtToken, Pagination(1, 8), errorHandler(getAllProductController))
router.get('/search', jwtToken, errorHandler(searchProductController))
router.get('/:ID', jwtToken, errorHandler(getProductByIDController))
router.post('/create', jwtToken, errorHandler(createProductController))
router.put('/:productID', jwtToken, isAdmin, errorHandler(updateProductController))
router.delete('/:productID', jwtToken, isAdmin, errorHandler(deleteProductController))

export default { path, router }
