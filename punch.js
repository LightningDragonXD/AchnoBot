var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function punch(message){
	var PUNCH = ["https://i.imgur.com/oLrl3ys.gif","https://i.imgur.com/pudoR63.gif","https://i.imgur.com/1p128KA.gif","https://i.imgur.com/0h9LpJm.gif"];
	var R_PUNCH = Math.floor(Math.random()*PUNCH.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"punch")){
			 if(splitfun.length === 1){
				 var punch = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot te donne un coup ! :punch:")
					.setImage(PUNCH[R_PUNCH])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(punch);

			}else if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				 var punch = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" donne un coup à "+message.guild.member(message.mentions.users.first())+"! :punch:")
					.setImage(PUNCH[R_PUNCH])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(punch);
				}
    						
			}else{
				senderror(message, "Commande inconnue.");	
			}
		}
	}
}
module.exports = punch;