var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function hug(message){
	var HUG = ["https://i.imgur.com/rYrTbDQ.gif","https://i.imgur.com/8qde7Wc.gif","https://i.imgur.com/EfobnJ4.gif","https://i.imgur.com/g5qHUlx.gif","https://i.imgur.com/OjmPBRj.gif"];
	var R_HUG = Math.floor(Math.random()*HUG.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"hug")){
			if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
		   			var hug = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" fait un gros câlin à "+message.guild.member(message.mentions.users.first())+" ! :flushed:")
					.setImage(HUG[R_HUG])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(hug);
				}
	
			}else if(splitfun.length === 1){
				 var hug = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot fait un gros câlin ! :flushed:")
					.setImage(HUG[R_HUG])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(hug);
			
			}else{
        			senderror(message, "Commande inconnu");		
    			}	
		}
	}
}
module.exports = hug;