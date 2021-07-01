import ProductRouter from './product/getAllProduct/ProductRouter'
import CrudRouter from './product/crudProduct/CrudRouter'
import DefaultRouter from './default/DefaultRouter'

export default [
    DefaultRouter,
    ProductRouter,
    CrudRouter
]