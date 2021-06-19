import mysql from 'mysql'
import config from '../../config/config.js'
import { query } from './getDataDAL.js'

export const queryData = async (req, res, next) => {
    await query()
}