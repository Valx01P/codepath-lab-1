import express from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import giftData from '../data/gifts.js'
import { getGifts, getGiftById } from '../controllers/gifts.js'


// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', getGifts)

// router.get('/', (req, res) => {
//     res.status(200).json(giftData)
// })

router.get('/:giftId', getGiftById)



export default router