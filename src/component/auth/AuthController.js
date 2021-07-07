import * as authDAL from './AuthDAL'
import * as jwtUtil from '../../util/Jwt'

import { response } from '../../util/ResponseCheck'
import { TOKEN } from '../../constant/Token'
import { ERRORS } from '../../constant/Errors'

let admin = {
    username: 'hynica-yh',
    password: 'htnicayh_6',
    email: 'domain@gmail.com',
    authorize: 'admin'
}

export const login = async (req, res, next) => {
    
}

export const regist = async (req, res, next) => {

}

export const getUser = (req, res, next) => {
    res.json({
        status: 'Access Token',
        data: admin
    })
}

export const createToken = async (req, res, next) => {
    const data = req.body
    const result = await jwtUtil.createToken(data)
    res.json(result)
}