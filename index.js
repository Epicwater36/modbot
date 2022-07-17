import DiscordJS, {Intents} from "discord.js"
import dotenv from "dotenv"

dotenv.config()


const client = new DiscordJS.Client({
    intents : [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
    console.log("The bot has connected.")

})
//998357286240137216
client.on("messageCreate", (message)=>{
    const senderID = message.author.id
    if (message.content.includes("💀")){
        message.delete()
            
    } 
//     if(message.content === "ping"){
//         message.reply({
//             content:"pong"
//         })
//     } else if (message.content.toLowerCase() === "taiwan" || message.content.toLowerCase() === "taiwanese"){
//         message.reply({
//             content:`
//             ATTENTION CITIZEN! 市民请注意!
// This is the Ministry of State Security. 您的浏览记录和活动引起了我们的注意 YOUR INTERNET ACTIVITY HAS ATTRACTED OUR ATTENTION. 同志們注意了 you have been found protesting in the discord server!!!!! 這是通知你，你必須認同我們將接管台灣 serious crime 以及世界其他地方 100 social credits have been deducted from your account 這對我們未來的所有下屬來說都是重要的機會 stop the protest immediately 立即加入我們的宣傳活動，提前獲得救贖 do not do this again! 不要再这样做! if you do not hesitate, more social credits ( -11115 social credits )will be subtracted from your profile, resulting in the subtraction of ration supplies. (由人民供应部重新分配 ccp) you'll also be sent into a re-education camp in the xinjiang uyghur autonomous zone.
// 为党争光! Glory to the CCP!
//             `
//         })
//     }
})

client.login(process.env.TOKEN)