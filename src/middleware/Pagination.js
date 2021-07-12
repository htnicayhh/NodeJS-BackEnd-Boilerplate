
export const Pagination = (page = 1, size = 8) =>
    async (req, res, next) => {
        let Page = parseInt(req.query.page) || page
        let Size = parseInt(req.query.size) || size

        req.Pagination.start = (Page - 1) * Size
        req.Pagination.end = Page * Size
        req.Pagination.limit = Size
        req.Pagination.page = Page
        req.Pagination.size = Size
    }

