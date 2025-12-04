import "./src/bot/bot.js"
import mongoose from "mongoose"
import { config } from "dotenv"
config()

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log(`Db is connected`)
})
.catch(() => {
    console.log(`error: db is not connected`)
})
console.log("dastur ishga tushmoqda")