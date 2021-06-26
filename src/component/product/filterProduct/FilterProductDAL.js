import { query } from '../../../util/database' 

export const filterProductDAL = async () => {
    let sqlCate = 'select ID from categories'
    let sqlPro = 'select * from products'

    const categoriesID = await query(sqlCate)
    const products = await query(sqlPro)

    return { categoriesID, products }
}