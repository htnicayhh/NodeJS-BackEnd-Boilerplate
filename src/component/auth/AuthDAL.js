import * as authUtil from '../../util/Database'

export const getUserByName = async (username, password) => {
    const searchUserSQL = 'SELECT * FROM userzonex WHERE username = ?'
    const result = await authUtil.queryOne(searchUserSQL, [username, password])
    return result
}

export const createAccount = async (username, password, email) => {
    let authorize = 'user'
    const createSQL = 'INSERT INTO userzonex (username, password, email, authorize) VALUES (?, ?, ?, ?)'
    const result = await authUtil.query(createSQL, [username, password, email, authorize])
    return result
}