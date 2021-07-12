import * as Database from '../../util/Database'

export const getAllProduct = async () => {
    let sql = 'SELECT * FROM products order by ID_Cate'
    const result = await Database.query(sql)
    return result
}

export const getProductByID = async (ID) => {
    let sql = 'SELECT * FROM products WHERE ID = ?'
    const result = await Database.queryOne(sql, [ID])
    return result
}

export const createProduct = async (product) => {
    let sql = 'INSERT INTO products (ID_Cate, Name, Image, Price, Count, Deleted) VALUES (?, ?, ?, ?, ?, 0)'
    const result = await Database.query(sql, [product.ID_Cate, product.Name, product.Image, product.Price || 0, product.Count || 0])
    return result
}

export const deleteProduct = async (itemID) => {
    let sql = 'UPDATE products SET Deleted = 1 WHERE ID = ?'
    const result = await Database.query(sql, [itemID])
    return result
}

export const searchProduct = async (search, name) => {

}

export const updateProduct = async (productID, name) => {

}