export const errorHandler = f => async (req, res, next) => {
    try {
        const handler = await f(req, res, next)
        return handler
    } catch (error) {
        next(error)
    }
}