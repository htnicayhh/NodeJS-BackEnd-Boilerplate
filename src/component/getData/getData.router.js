import express from 'express'
import { errorHandler } from '../../middleware/errorHandler.js'
import { queryData } from './getData.controller.js'

const router = express.Router()

router.get('/', errorHandler(queryData))

export default router
