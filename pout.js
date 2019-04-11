var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');

function pout(message){
    var POUT = ["https://i.imgur.com/kwAz369.gif", "https://i.imgur.com/CuSkd0Q.gif", "https://i.imgur.com/gchSFbC.gif"];
    var R_POUT = Math.floor(Math.random()*POUT.length);
    if(message.content[0] === prefix){
        let splitpout = message.content.split(' ');
        if(splitpout[0] === (prefix+"pout")){
            if(splitpout.length === 1){
                var pout = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot boude "+message.author.toString()+" 😒")
					.setImage(POUT[R_POUT])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
                    message.channel.sendEmbed(pout);
            }else if(splitpout.length === 2){
                if(message.guild.member(message.mentions.users.first())){
                    var pout = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" boude "+message.mentions.users.first()+" 😒")
					.setImage(POUT[R_POUT])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
                    message.channel.sendEmbed(pout);
                }
            }else{
                senderror(message, "Commande inconnue.");
            }
        }
    }
}
module.exports = pout;