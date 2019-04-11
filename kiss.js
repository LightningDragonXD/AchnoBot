var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function kiss(message){
	var KISS = ["https://i.imgur.com/CJ4qnQ7.gif","https://i.imgur.com/OnabSmr.gif","https://i.imgur.com/dqd4b3w.gif","https://i.imgur.com/LhTCe1J.gif","https://i.imgur.com/OAD1UH7.gif"];
	var R_KISS = Math.floor(Math.random()*KISS.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"kiss")){
			 if(splitfun.length === 1){
				 var kiss = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot t'embrasse :kissing_heart:")
					.setImage(KISS[R_KISS])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(kiss);

			}else if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				 var kiss = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" embrasse "+message.guild.member(message.mentions.users.first())+" :kissing_heart:")
					.setImage(KISS[R_KISS])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(kiss);
				}
    						
			}else{
				senderror(message, "Commande inconnue.");	
			}
		}
	}
}
module.exports = kiss;