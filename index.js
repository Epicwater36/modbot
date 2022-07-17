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
    if (message.content.includes("💀") || message.content.includes("☠️") || message.content.includes("🗿")){
        message.delete()
            
    } 
  
})

client.login(process.env.TOKEN)