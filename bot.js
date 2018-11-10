var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: process.env.TOKEN
});

bot.on('ready', function(event){
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
    bot.connect();
});

bot.on('message', function(user, userID, channelID, message, event){
    if(message === "ping"){
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});
