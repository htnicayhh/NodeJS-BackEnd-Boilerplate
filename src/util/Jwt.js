import jwt from 'jsonwebtoken'
import Config from '../config/Config'
import { TOKEN } from '../constant/Token'

export const createToken = (payload, options) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, Config.JWT_SECRET, options || { expiresIn: '15s' }, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, Config.JWT_SECRET, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}