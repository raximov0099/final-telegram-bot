import TelegramBot from "node-telegram-bot-api"

import { config } from "dotenv"
config()

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })

bot.on("message", (msg) => {
    const chatId = msg.chat.id
    const first_name = msg.chat.first_name
    const text = msg.text

    bot.sendMessage(chatId, `assalomu alaykum ${first_name}`);
    bot.sendMessage(chatId, `${text}`)
})
console.log("bot ishga tushdi...")