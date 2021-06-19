import mysql from 'mysql'
import config from '../config/config.js'
import { STATUS } from '../constant/status.js'
import { response } from './responseCheck.js'

const connection = mysql.createConnection(config.MYSQL_URL)

export const queryAll = async (res, req, next) => {
    connection.query('select * from userzonex', (error, recordset) => {
        if (error) {
            next(error)
        } 
        return console.log(response(STATUS.NOT_ERROR.CODE, STATUS.NOT_ERROR.MESSAGE, recordset))
    })
}
export const getConnection = async (req, res, next) => {
    connection.connect((error) => {
        if (error) {
            console.log(error.message)
        } else {
            console.log('Connect Complete...')
        }
    })
}