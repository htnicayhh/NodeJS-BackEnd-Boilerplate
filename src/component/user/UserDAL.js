import * as databaseUtil from '../../util/Database'
import { hashSync } from '../../util/Bcrypt'
import { ERRORS } from '../../constant/Errors'

export const getUserByID = async (userID) => {
    const sql = 'SELECT * FROM users WHERE id = ?'
    let result = await databaseUtil.queryOne(sql, [userID])
    delete result.password
    return result
}

export const getAllUser = async () => {
    const sql = 'SELECT * FROM users'
    let result = await databaseUtil.query(sql)
    for (let i = 0; i < result.length; i++) {
        delete result[i].password
    }
    return result
}

export const updateUser = async (userID, update) => {
    const sql = 'UPDATE users SET 1 = 1'
    let params = []
    if (update.fullName) {
        sql += ', fullName = ?'
        params.push(update.fullName)
    }
    if (update.address) {
        sql += ', address = ?'
        params.push(update.address)
    }
    if (update.email) {
        sql += ', email = ?'
        params.push(update.email)
    }
    if (update.age) {
        sql += ', age = ?'
        params.push(update.age)
    }
    if (update.password) {
        let hashPW = hashSync(update.password)
        sql += ', password = ?'
        params.push(hashPW)
    }
    if (update.gender) {
        if (gender === '1' || gender === '2') {
            sql += ', gender = ?'
            params.push(update.gender)
        } else {
            throw ERRORS.INVALID_INPUT_PARAMS
        }
    }
    if (update.avatar) {
        sql += ', avatar = ?'
    }
    let sqlMiddle = ' WHERE id = ?'
    params.push(userID)
    let sqlFinally = sql + sqlMiddle
    let result = await databaseUtil.query(sqlFinally, params)
    return result
}