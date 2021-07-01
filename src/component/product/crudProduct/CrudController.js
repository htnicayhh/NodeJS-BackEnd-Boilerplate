import { STATUS } from '../../../constant/status'
import { response } from '../../../util/responseCheck'
import { createProducts, deleteProducts, filterProducts } from './CrudDAL'

export const filterProductController = async (req, res) => {
    let id = parseInt(req.query.id)
    const data = await filterProducts(id)
    res.send(response(STATUS.NOT_ERROR.CODE, STATUS.NOT_ERROR.MESSAGE, data))
}

export const deleteProductController = async (req, res) => {
    let id = req.query.id
    await deleteProducts(id)
}


