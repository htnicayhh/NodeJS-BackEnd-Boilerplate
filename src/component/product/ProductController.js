import { getAllProductDAL } from "./ProductDAL"

export const getAllProductController = async (req, res, next) => {
    const data = await getAllProductDAL()
    res.send(data)
}