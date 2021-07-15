import * as Database from '../../util/Database'
import { ERRORS } from '../../constant/Errors'

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
    const result = await Database.query(sql, [product.ID_Cate, product.Name, product.Image || '', product.Price || 0, product.Count || 0])
    return result
}

export const deleteProduct = async (itemID) => {
    let sql = 'UPDATE products SET Deleted = 1 WHERE ID = ?'
    const result = await Database.query(sql, [itemID])
    return result
}

export const searchProduct = async (search, name) => {
    let sql = 'SELECT * FROM products WHERE 1 = 1'
    let params = []
    if (name) {
        sql += ' AND Name = ?'
        params.push(name)
    }
    if (search) {
        sql += ' AND LOWER(Name) LIKE ?'
        params.push('%' + search.toLowerCase() + '%')
    }
    const result = await Database.query(sql, params)
    return result
}

export const updateProduct = async (productID, update) => {
    let sql = 'UPDATE products SET 1 = 1'
    let params = []
    if (update.ID_Cate) {
        sql += ', ID_Cate = ?'
        params.push(update.ID_Cate)
    }
    if (update.ID) {
        sql += ', ID = ?'
        params.push(update.ID)
    }
    if (update.Name) {
        sql += ', Name = ?'
        params.push(update.Name)
    }
    if (update.Price) {
        if (parseInt(update.Price) < 0) {
            throw ERRORS.INVALID_INPUT_PARAMS
        } else {
            sql += ', Price = ?'
            params.push(update.Price)
        }
    }
    if (update.Image) {
        sql += ', Image = ?'
        params.push(update.Image)
    }
    if (update.Count) {
        if (update.Count < 0) {
            throw ERRORS.INVALID_INPUT_PARAMS
        } else {
            sql += ', Count = ?'
            params.push(update.Count)
        }
    }
    if (update.Description) {
        sql += ', Description = ?'
        params.push(update.Description)
    }
    let sqlMiddle = 'WHERE ID = ?'
    params.push(ID)
    let sqlFinally = sql + sqlMiddle
    let result = await database.query(sqlFinally, params)
    return result
    
}

