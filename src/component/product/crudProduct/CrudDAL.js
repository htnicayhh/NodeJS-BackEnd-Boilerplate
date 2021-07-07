import * as crudDAL from "../../../util/Database"

export const getProductByID = async (id) => {
    let filterSQL = 'SELECT * FROM products WHERE ID = ?'
    const result = await crudDAL.queryOne(filterSQL, [id])
    return result
}

export const updateProducts = async (id, data) => {
    let updateSQL = 'UPDATE products SET ? WHERE ID = ?'
    const result = await crudDAL.query(updateSQL, [data, id])
    return result
}

export const createProduct = async (product) => {
    let createSQL = 'INSERT INTO products (ID_Cate, ID, Name, Image, Price, Count, Description) VALUES (?, ?, ?, ?, ?, ?, ?)'
    const result = await crudDAL.query(createSQL, [product.ID_Cate, product.ID, product.Name, product.Image, product.Price || 0, product.Count || 0, product.Description || ''])
    return result
}

export const deleteProducts = async (id) => {
    let deleteSQL = 'DELETE FROM products WHERE ID = ?'
    const deleteID = await crudDAL.query(deleteSQL, [id])
    return deleteID
}

