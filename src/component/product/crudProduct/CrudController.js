import { STATUS } from '../../../constant/Status'
import { response } from '../../../util/ResponseCheck'
import * as Crud from './CrudDAL'

export const getProductController = async (req, res) => {
    let id = parseInt(req.query.id)
    const data = await Crud.getProductByID(id)
    res.send(response(data, STATUS.NOT_ERROR.CODE, STATUS.NOT_ERROR.MESSAGE))
}

export const updateProductController = async (req, res) => {
    let data = req.body
    let id = req.params.id
    await Crud.updateProducts(id, data)
    res.json({MESSAGE: 'Update Complete ...'})
}

export const createProductController = async (req, res) => {
    let data = req.body
    const dataCreate = await Crud.createProduct(data)
    res.json({MESSAGE: 'Create Success'})
}

export const deleteProductController = async (req, res) => {
    let id = req.query.id
    const dataDelete = await Crud.deleteProducts(id)
    res.json({MESSAGE: 'Delete Complete ...'})
}

