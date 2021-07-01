import { query } from "../../../util/database"

export const filterProducts = async (ID) => {
    let filterSQL = 'select * from products where ID_Cate = ?'
    const categoriesID = await query(filterSQL, ID)
    return categoriesID
}

export const deleteProducts = async (ID) => {
    let deleteSQL = 'delete from products where ID = ?'
    const deleteID = await query(deleteSQL, ID)
    return deleteID
}

export const createProducts = async (ID_Cate, ID, Name, Image, Price, Count, Description) => {
    let createSQL = 'insert into products (ID_Cate, ID, Name, Image, Price, Count, Description) values (?, ?, ?, ?, ?, ?, ?)'
    const result = await query(createSQL, {ID_Cate, ID, Name, Image, Price, Count, Description})
    return result
}