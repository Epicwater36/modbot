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
    console.log(senderID)
    if (message.content.includes("💀") || message.content.includes("☠️") || message.content.includes("🗿") ||message.content.includes(":ScreenShot20220717at4~1:")){
        message.delete()
            
    } 
    // if (message.author.id === "579154469724487680" || message.author.id ==="720398088623357973"){
    //     message.delete()
    // }
  
})

client.login(process.env.TOKEN)