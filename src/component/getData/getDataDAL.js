import mysql from 'mysql'
import config from '../../config/config.js'
import { getConnection, queryAll } from "../../util/Database.js"

export const query = async (req, res, next) => {
    const connection = mysql.createConnection(config.MYSQL_URL)
    await getConnection()
    await queryAll()
}