import { Router } from 'express'
import { errorHandler } from '../../middleware/ErrorHandler'
import { jwtToken } from '../../middleware/Authenticate'
import { isAdmin } from '../../middleware/Authorize'
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

router.get('/all', jwtToken, errorHandler(getAllProductController))
router.get('/search', jwtToken, errorHandler(searchProductController))
router.get('/:ID', jwtToken, errorHandler(getProductByIDController))
router.post('/create', jwtToken, errorHandler(createProductController))
router.put('/:productID', jwtToken, isAdmin, error(updateProductController))
router.delete('/:productID', jwtToken, isAdmin, errorHandler(deleteProductController))

export default { path, router }
