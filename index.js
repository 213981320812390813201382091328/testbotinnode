const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";

Client.on('ready', ()=>{
    console.log("Bot is online.");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("hello. " + message.author + " how are you?");

    }

    if(message.content.startsWith(prefix + "commands")){
        message.channel.send("Check PM");
        message.author.send("hi its my commands");
    }

    if(message.content.startsWith(prefix + "helpme")){
        message.channel.send(" צריך את עזרתכם " + message.author + "\n" + message.member.voiceChannel + " :הוא בחדר");
        
    }



})


Client.login("NjMyNjYwMjE3MDQwOTk0MzE0.Xad7bg.d7HjsCUHbZWl3prBabjsEplTDHs");