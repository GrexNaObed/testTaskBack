import pkg from 'express'
import { cardController } from '../controllers/Card.js'

const { Router } = pkg
const router = Router()

router.post('/save-card', cardController.saveCard)

export const cardsRouter = router