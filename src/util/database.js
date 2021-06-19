import mysql from 'mysql'
import config from '../config/config.js'
// create database
const connection = mysql.createPool(config.MYSQL_URL);

export const query = async (sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};