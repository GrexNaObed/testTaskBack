import expres from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { cardsRouter } from './routes/index.js'

dotenv.config()

const app = expres()
const PORT = process.env.PORT || 5000


app.use(expres.json())
app.use(cors(
    { origin: process.env.ACCESS__URL }
))

app.use('/api', cardsRouter)

app.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGO__URI)
    console.log('server started', process.env.ACCESS__URL, process.env.PORT)
})