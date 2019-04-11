var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function dance(message){
    var DANCE = ["https://i.imgur.com/LVkvBWf.gif", "https://i.imgur.com/BcgLJ8G.gif","https://i.imgur.com/za0EZdB.gif","https://i.imgur.com/KtIF2a8.gif"];
    var R_DANCE = Math.floor(Math.random()*DANCE.length)
    if(message.content[0] === prefix){
        let splitdance = message.content.split(' ');
        if(splitdance[0] === (prefix+"dance")){
            if(splitdance.length === 1){
                
                var dance = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot danse avec "+message.author.toString()+" 🤠")
					.setImage(DANCE[R_DANCE])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(dance);
            }else if(splitdance.length === 2){
                if(message.guild.member(message.mentions.users.first())){
                    
                    var dance = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" danse avec "+message.guild.member(message.mentions.users.first())+" 🤠")
					.setImage(DANCE[R_DANCE])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(dance);
                }
            }else {
                senderror(message, "Commande inconnue.")
            }
        }
    }
}
module.exports = dance;