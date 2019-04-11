var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function tickle(message){
	var TICKLE = ["https://i.imgur.com/Orl0n6r.gif","https://i.imgur.com/R68JMAb.gif","https://i.imgur.com/ZZuTTNX.gif"];
	var R_TICKLE = Math.floor(Math.random()*TICKLE.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"tickle")){
			if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				var tickle = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" fait des chatouilles à "+message.guild.member(message.mentions.users.first())+":joy:")
					.setImage(TICKLE[R_TICKLE])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(tickle);
				}
			}else if(splitfun.length === 1){
				var tickle = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot te chatouille :joy:")
					.setImage(TICKLE[R_TICKLE])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(tickle);
				
			
			}else{
				senderror(message, "Commande inconnue.");
			}
		}
	}
}
module.exports = tickle;