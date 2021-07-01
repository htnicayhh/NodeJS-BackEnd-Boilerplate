import { query } from '../../../util/database'

export const getAllProductDAL = async () => {
    let sql = 'select * from products order by ID_Cate'
    const res = await query(sql)
    return res
}