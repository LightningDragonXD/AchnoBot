var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function bloodsuck(message){
	var BLOOD = ["https://i.imgur.com/GXtaS5q.gif","https://i.imgur.com/SD9N08s.gif","https://i.imgur.com/xTRwnJ6.gif","https://i.imgur.com/LgF2cul.gif"];
	var R_BLOOD = Math.floor(Math.random()*BLOOD.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"bloodsuck")){
			if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				var blood = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" boit le sang de "+message.guild.member(message.mentions.users.first())+":smiling_imp:")
					.setImage(BLOOD[R_BLOOD])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(blood);
				}
			}else if(splitfun.length === 1){
				var blood = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot boit ton sang :smiling_imp:")
					.setImage(BLOOD[R_BLOOD])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(blood);
				
			
			}else{
				senderror(message, "Commande inconnue.");
			}
		}
	}
}
module.exports = bloodsuck;