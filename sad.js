var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function sad(message){
	var SAD = ["https://i.imgur.com/cgeN5Cu.gif","https://i.imgur.com/9GnWzJx.gif","https://i.imgur.com/tpyXSxo.gif"];
	var R_SAD = Math.floor(Math.random()*SAD.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"sad")){
			if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				var sad = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" est triste à cause de "+message.guild.member(message.mentions.users.first())+":cry:")
					.setImage(SAD[R_SAD])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(sad);
				}
			}else if(splitfun.length === 1){
				var sad = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" est triste :cry:")
					.setImage(SAD[R_SAD])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(sad);
				
			
			}else{
				senderror(message, "Commande inconnue.");
			}
		}
	}
}
module.exports = sad;