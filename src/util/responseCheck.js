import { STATUS } from "../constant/status.js"

export const response = 
    (CODE = STATUS.NOT_ERROR.CODE,
    MESSAGE = STATUS.NOT_ERROR.MESSAGE,
    DATA) => {
        return { CODE, MESSAGE, DATA }
    }