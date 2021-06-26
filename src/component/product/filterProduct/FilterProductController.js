import { filterProductDAL } from './FilterProductDAL'
import { STATUS } from '../../../constant/status'
import { response } from '../../../util/responseCheck'

export const filterProductController = async (req, res, next) => {
    const data = await filterProductDAL()
    let $001 = [],
        $002 = [],
        $003 = []
    for (let i = 0; i < data.categoriesID.length; i++) {
        let cateID = data.categoriesID[i]
        for (let j = 0; j < data.products.length; j++) {
            let proID = data.products[j]
            if (cateID.ID === '001' && proID.ID_Cate === '001') {
                $001.push(proID)
            } else if (cateID.ID === '002' && proID.ID_Cate === '002') {
                $002.push(proID)
            } else if (cateID.ID === '003' && proID.ID_Cate === '003') {
                $003.push(proID)
            }
        }
    }
    let filterData = response(STATUS.NOT_ERROR.CODE, STATUS.NOT_ERROR.MESSAGE, {$001, $002, $003}) 
    res.send(filterData)
}