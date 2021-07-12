import * as productDAL from './ProductDAL'
import { response } from '../../util/ResponseCheck'
import { ERRORS } from '../../constant/Errors'

export const getAllProductController = async (req, res, next) => {
    const result = await productDAL.getAllProduct(req)
    res.status(200).send(response(result))
}

export const getProductByIDController = async (req, res, next) => {
    const { id } = req.params
    const result = await productDAL.getProductByID(id)
    res.status(200).send(response(result))
}

export const createProductController = async (req, res, next) => {
    let formData = req.body
    if (formData.ID_Cate && formData.Name) {
        await productDAL.createProduct(formData)
        res.status(200).send(response(formData))
    } else {
        next(ERRORS.INVALID_INPUT_PARAMS)
    }
}

export const deleteProductController = async (req, res, next) => {
    let { id } = req.params?.ID
    const result = await productDAL.deleteProduct(id)
    res.status(200).send(response({
        deleleProductID: id
    }))
}