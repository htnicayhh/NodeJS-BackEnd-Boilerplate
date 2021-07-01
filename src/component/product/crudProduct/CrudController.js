import { STATUS } from '../../../constant/status'
import { response } from '../../../util/responseCheck'
import * as Crud from './CrudDAL'

export const filterProductController = async (req, res) => {
    let id = parseInt(req.query.id)
    const data = await Crud.filterProducts(id)
    res.send(response(STATUS.NOT_ERROR.CODE, STATUS.NOT_ERROR.MESSAGE, data))
}


export const updateProductController = async (req, res) => {
    let data = req.body
    let id = req.params.id
    await Crud.updateProducts(id, data)
    res.json({MESSAGE: 'Complete'})
}

