import * as JwtUtil from '../util/Jwt'
import { ERRORS } from '../constant/Errors'

export const jwtToken = async (req, res, next) => {
    const authorization = req.headers['authorization'] // 'Beaer [token]'
    
    if (authorization && authorization.match(/^Beaer /g)) {
        const token = authorization.split(' ')[1] // Get token
        if (token) {
            try {
                const tokenValid = await JwtUtil.verifyToken(token)
                req.tokenValid = tokenValid // Save into req for later processing...
                next()
            } catch (error) {
                res.sendStatus(ERRORS.UNAUTHORIZE_ERROR)
            }
        }
    } else {
        next(ERRORS.TOKEN_REQUIRED)
    }
    
}

export const refreshToken = async (req, res, next) => {
    
}
