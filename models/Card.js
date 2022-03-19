import pkg from 'mongoose'
const { Schema, model } = pkg

const CardSchema = new Schema({
    cardNumber: { type: String, default: '' },
    date: { type: Date, default: new Date() },
    amount: { type: Number, default: 0 },
    cvv: { type: String, default: '' }
})

export const cardModel = model('Card', CardSchema)