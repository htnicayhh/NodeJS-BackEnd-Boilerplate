import { response } from '../../util/ResponseCheck'
import {
    getUserByID,
    getAllUser,
    updateUser
} from './UserDAL'

export const getUserController = async (req, res, next) => {
    const { tokenValid } = req
    let userID = tokenValid.id
    const result = await getUserByID(userID)
    res.status(200).send(response({ result }))
}

export const getAllUserController = async (req, res, next) => {
    const result = await getAllUser()
    res.status(200).send(response({ result }))
}

export const updateUserController = async (req, res, next) => {
    const { tokenValid } = req
    let userID = tokenValid.id
    const update = req.body
    const result = await updateUser(userID, update)
    res.status(201).send(response({ userID, result }))
}