import express from 'express'
import './config/dotenv.js'
import cors from 'cors'
import giftsRouter from './routes/gifts.js'
import requestLogger from './log/requestLogger.js'

const app = express()

app.use(cors())

app.use(requestLogger)

app.use('/gifts', giftsRouter)

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

// import express from 'express'
// import './config/dotenv.js'
// import cors from 'cors'
// import giftsRouter from './routes/gifts.js'

// import './config/dotenv.js';

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const app = express()

// app.use(cors())

// // // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, '../public')))

// // Use the gifts router
// app.use('/gifts', giftsRouter)

// // Serve index.html for the root route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })

// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//     console.log(`🚀 Server listening on http://localhost:${PORT}`)
// })