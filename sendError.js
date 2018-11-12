var Discord = require('discord.js');
function sendError(message, description){
   var embed = new Discord.RichEmbed()
            .setColor("#FE0000")
            .setDescription(':x: '+ description)
            .setFooter('Créer par AchnoBot')     
            .setTimestamp()
  message.channel.sendEmbed(embed);
}
