var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
var lsCmdsFun = ["hug", " kiss"," punch"," sad"," pat"," tickle"," bloodsuck"," roll"," dance", " pout"];
var lsCmdsAdmin = ["kick", " ban", " clear", " createRole", " mute"];
function helpCommands(message){
	if(message.content[0] === prefix){
		let splitHelp = message.content.split(" ");
		if(splitHelp[0] === (prefix+"help")){
			if(splitHelp.length === 1){
					var help = new Discord.RichEmbed()
				.setTitle('Liste des Commandes')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Pour afficher l\'aide d\'une commande particulière ajouter en plus le nom de la commande')
				.addField('Prefix', prefix)
				.addField('Commandes d\'Administration',`${lsCmdsAdmin}`)
				.addField('Commandes Fun',`${lsCmdsFun}`)
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				
							
			}else if(splitHelp.length === 2){
				if(splitHelp[1] === "kick"){
				var help = new Discord.RichEmbed()
				.setTitle('Kick')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet d\'expulser un membre.\n\n'+prefix+'kick @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else	if(splitHelp[1] === "clear"){
					var help = new Discord.RichEmbed()
					.setTitle('Kick')
					.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
					.setDescription('Permet d\'effacer les messages.\n\n'+prefix+'clear nombre')
					.setTimestamp()
					.setColor("#0155FE")
					message.channel.sendEmbed(help);
					
					}else	if(splitHelp[1] === "mute"){
						var help = new Discord.RichEmbed()
						.setTitle('Kick')
						.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
						.setDescription('Permet de mute un membre.\n\n'+prefix+'mute @quelqu\'un')
						.setTimestamp()
						.setColor("#0155FE")
						message.channel.sendEmbed(help);
						
						}else if(splitHelp[1] === "ban"){
					var help = new Discord.RichEmbed()
					.setTitle('Ban')
					.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
					.setDescription('Permet de bannir un membre.\n\n'+prefix+'ban @quelqu\'un')
					.setTimestamp()
					.setColor("#0155FE")
					message.channel.sendEmbed(help);
					
					}else if(splitHelp[1] === "hug"){
				var help = new Discord.RichEmbed()
				.setTitle('Hug')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet de faire des câlins aux gens.\n\n'+prefix+'hug ou '+prefix+'hug @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				
				}else if(splitHelp[1] === "punch"){
				var help = new Discord.RichEmbed()
				.setTitle('Punch')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet de frapper quelqu\'un.\n\n'+prefix+'punch ou '+prefix+'punch @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
			    	
    		}else if(splitHelp[1] === "kiss"){
				var help = new Discord.RichEmbed()
				.setTitle('Kiss')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet d\'embrasser quelqu\'un.\n\n'+prefix+'kiss ou '+prefix+'kiss @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
					
				}else if(splitHelp[1] === "botname"){
				var help = new Discord.RichEmbed()
				.setTitle('Botname')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet de renommer le bot.\n\n'+prefix+'botname nom')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "sad"){
					message.delete();
				var help = new Discord.RichEmbed()
				.setTitle('Sad')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Fait pleurer quelqu\'un.\n\n'+prefix+'sad ou '+prefix+'sad @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "pat"){
				var help = new Discord.RichEmbed()
				.setTitle('Pat')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Fait une caresse sur la tête quelqu\'un.\n\n'+prefix+'pat ou '+prefix+'pat @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "tickle"){
				var help = new Discord.RichEmbed()
				.setTitle('Tickle')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Fait des chatouilles à quelqu\'un.\n\n'+prefix+'tickle ou '+prefix+'tickle @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "bloodsuck"){
				var help = new Discord.RichEmbed()
				.setTitle('bloodsuck')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Boit le sang de quelqu\'un.\n\n'+prefix+'bloodsuck ou '+prefix+'bloodsuck @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "roll"){
				var help = new Discord.RichEmbed()
				.setTitle('Roll')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet de lancer des dés.\n\n'+prefix+'roll ou '+prefix+'roll 1d100')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "dance"){
					var help = new Discord.RichEmbed()
					.setTitle('Dance')
					.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
					.setDescription('Permet de danser.\n\n'+prefix+'dance ou '+prefix+'dance @quelqu\'un')
					.setTimestamp()
					.setColor("#0155FE")
					message.channel.sendEmbed(help);
					}else if(splitHelp[1] === "pout"){
						var help = new Discord.RichEmbed()
						.setTitle('Dance')
						.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
						.setDescription('Permet de bouder.\n\n'+prefix+'pout ou '+prefix+'pout @quelqu\'un')
						.setTimestamp()
						.setColor("#0155FE")
						message.channel.sendEmbed(help);
						}
		    }else{
				senderror(message, "Commande inconnue.");
        }
	    }
    }
}
module.exports = helpCommands;