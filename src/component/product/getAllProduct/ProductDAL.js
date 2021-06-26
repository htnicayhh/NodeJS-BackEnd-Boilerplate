import { query } from '../../../util/database'

export const getAllProductDAL = async () => {
    let sql = 'select * from userzonex'
    const res = await query(sql)
    return res
}