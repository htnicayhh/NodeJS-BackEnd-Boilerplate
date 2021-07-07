import ProductRouter from './product/getAllProduct/ProductRouter'
import CrudRouter from './product/crudProduct/CrudRouter'
import DefaultRouter from './default/DefaultRouter'
import AuthRouter from './auth/AuthRouter'

export default [
    DefaultRouter,
    ProductRouter,
    CrudRouter,
    AuthRouter
]