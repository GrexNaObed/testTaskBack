import { cardModel } from "../models/Card.js";

export class CardService {
    async saveCardsValues({ cardNumber, date, amount, cvv }) {
      
        const hasCard = await cardModel.findOne({ cardNumber: cardNumber })
        if (hasCard) return { status: 400, msg: 'That card already has' }

        const card = await cardModel.create({cardNumber, date, amount, cvv})
        return card ? {
            'RequestId': card._id,
            'Amount': card['amount']
        }
        : {
            status:505,
            msg:'Somethins was wrong'
        }
    }
}

export const cardService = new CardService()