import { cardService } from "../services/Card.js";

export class CardController {
    async saveCard(req, res) {
        const resp = await cardService.saveCardsValues(req.body)
        return res.json(resp)
    }
}

export const cardController = new CardController()