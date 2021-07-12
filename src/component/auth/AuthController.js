import * as authDAL from './AuthDAL'
import * as jwtUtil from '../../util/Jwt'

import { response } from '../../util/ResponseCheck'
import { TOKEN } from '../../constant/Token'
import { ERRORS } from '../../constant/Errors'
import { hashSync, compareSync } from '../../util/Bcrypt' 

export const login = async (req, res, next) => {
    const { username, password } = req.body
    if (username && password) {
        const customers = await authDAL.getUserByName(username)
        if (customers) {
            const pwIsValid = await compareSync(password, customers.password)
            if (pwIsValid) {
                let data = {
                    userId: customers.id,
                    userName: customers.username,
                    authorize: customers.authorize
                }
                const tokenValid = await jwtUtil.createToken(data, { expiresIn: TOKEN.TOKEN_EXPIRED })
                let token = {
                    token: tokenValid,
                    timeExpires: TOKEN.TOKEN_EXPIRED // ms
                }
                res.send(response(token))
            } else {
                next(ERRORS.INVALID_USERNAME_OR_PASSWORD_ERROR)
            }
        } else {
            next(ERRORS.INVALID_USERNAME_OR_PASSWORD_ERROR)
        }
    } else {
        next(ERRORS.INVALID_INPUT_PARAMS)
    }

}

export const regist = async (req, res, next) => {
    const { username, password, email } = req.body
    if (username && password) {
        const customers = await authDAL.getUserByName(username)
        if (customers) {
            next('USER_ALREADY_EXISTS')
        } else {
            const pwHash = hashSync(password)
            await authDAL.createAccount(username, password, email)
            res.send(response(req.body))
        }
    } else {
        next(ERRORS.INVALID_INPUT_PARAMS)
    }
}