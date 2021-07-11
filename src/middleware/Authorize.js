import { ERRORS } from '../constant/Errors'

export const isAdmin = async (req, res, next) => {
    const requireAdmin = req.tokenValid
    if (requireAdmin?.authorize === 'admin') {
        next()
    } else {
        next(ERRORS.TOKEN_NOT_ALLOW)
    }
}