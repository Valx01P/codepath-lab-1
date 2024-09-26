import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftsRouter from './routes/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')))

// Use the gifts router
app.use('/gifts', giftsRouter)

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})