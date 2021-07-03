import { query } from '../../../util/Database'

export const getAllProductDAL = async () => {
    let sql = 'select * from products order by ID_Cate'
    const res = await query(sql)
    return res
}