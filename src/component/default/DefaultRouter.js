import { Router } from 'express'

const path = '/'
const router = Router()

router.get('/', (req, res) => {
    res.json('OK')
})

export default { path, router }
