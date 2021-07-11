import createError from 'http-errors'

export const ERRORS = {
    SIGNATURE_ERROR: createError(400, 'BAD_SIGNATURE'),
    UNAUTHORIZE_ERROR: createError(401, 'UNAUTHORIZE_ERROR'),
    TOKEN_REQUIRED: createError(403, 'TOKEN_REQUIRED'),
    TOKEN_NOT_ALLOW: createError(401, 'TOKEN_NOT_ALLOW')
}