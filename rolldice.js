var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function rolldice(message){
	if(message.content[0] === prefix){
		let splitrolldice = message.content.split(" ");
		if(splitrolldice[0] === (prefix+"roll")){
			if(splitrolldice.length === 1){
				var roll = Math.floor(Math.random()*100)+1;
				if(roll <= 5){
					var embed = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" a lancé un dé et a fait: **"+roll+" ECHEC CRITIQUE !**")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(embed);
				}else if(roll >= 95){
					 var embed = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" a lancé un dé et a fait: **"+roll+" REUSSITE CRITIQUE !**")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(embed);
				}else{
					 var embed = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" a lancé un dé et a fait: **"+roll+"**")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(embed);
				}
				
			}else if(splitrolldice.length === 2){
				var r = splitrolldice[1].split("d");
				if(splitrolldice[1] == (r[0]+"d"+r[1])){
					for(var nbde = 0; nbde < r[0]; nbde++){
					var roll = Math.floor(Math.random()*r[1])+1;
						 var embed = new Discord.RichEmbed()
						.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
						.setDescription(message.author.toString()+" a lancé un dé et a fait: **"+roll+"**")
						.setFooter('Créer par AchnoBot')
						.setTimestamp()
						.setColor("#FE9901")			
						message.channel.sendEmbed(embed);
					}
				}else{
					senderror(message, "Commande incorrecte. Faites ?roll 1d100");
				}
				
				
			}else{
				senderror(message, "Commande inconnue.");
			}
		}
	}
}
module.exports = rolldice;