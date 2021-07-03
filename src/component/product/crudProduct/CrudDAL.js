import { query } from "../../../util/Database"

export const filterProducts = async (id) => {
    let filterSQL = 'SELECT * FROM products WHERE ID_Cate = ?'
    const categoriesID = await query(filterSQL, id)
    return categoriesID
}

export const updateProducts = async (id, data) => {
    let updateSQL = 'UPDATE products SET ? WHERE ID = ?'
    const updateID = await query(updateSQL, [data, id])
    return updateID
}

export const createProducts = async (data) => {
    let createSQL = 'INSERT INTO products SET ?'
    const createID = await query(createSQL, data)
    return createID
}

export const deleteProducts = async (id) => {
    let deleteSQL = 'DELETE FROM products WHERE ID = ?'
    const deleteID = await query(deleteSQL, id)
    return deleteID
}

