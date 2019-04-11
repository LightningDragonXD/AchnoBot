var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function pat(message){
	var PAT = ["https://i.imgur.com/O3CldWi.gif","https://i.imgur.com/JNVYPKV.gif","https://i.imgur.com/usy9J6r.gif"];
	var R_PAT = Math.floor(Math.random()*PAT.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"pat")){
			if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				var pat = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" caresse la tête de "+message.guild.member(message.mentions.users.first())+":blush:")
					.setImage(PAT[R_PAT])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(pat);
				}
			}else if(splitfun.length === 1){
				var pat = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot te caresse la tête :blush:")
					.setImage(PAT[R_PAT])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(pat);
				
			
			}else{
				senderror(message, "Commande inconnue.");
			}
		}
	}
}
module.exports = pat;