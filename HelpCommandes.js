var Discord = require('discord.js');
var error = require('./sendError.js');
function helpCommandes(message){
	if(message.content[0] === prefix){
		let splitHelp = message.content.split(" ");
		if(splitHelp[0] === (prefix+"help")){
			if(splitHelp.length === 1){
				var help = new Discord.RichEmbed()
				.setTitle('Liste des Commandes')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Pour afficher l\'aide d\'une commande particulière ajouter en plus le nom de la commande')
				.addField('Prefix', prefix)
				.addField('Commandes Fun','`hug`, `kiss`, `punch`, `botname`, `sad`')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
			
				
			}else if(splitHelp.length === 2){
				if(splitHelp[1] === "hug"){
				var help = new Discord.RichEmbed()
				.setTitle('Hug')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet de faire des câlins aux gens.\n\n?hug ou ?hug @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				
				}else if(splitHelp[1] === "punch"){
				var help = new Discord.RichEmbed()
				.setTitle('Punch')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet de frapper quelqu\'un.\n\n?punch ou ?punch @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
			    	
    				}else if(splitHelp[1] === "kiss"){
				var help = new Discord.RichEmbed()
				.setTitle('Kiss')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet d\'embrasser quelqu\'un.\n\n?kiss ou ?kiss @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
					
				}else if(splitHelp[1] === "botname"){
				var help = new Discord.RichEmbed()
				.setTitle('Botname')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet de renommer le bot.\n\n?botname nom')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "sad"){
				var help = new Discord.RichEmbed()
				.setTitle('Sad')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Fait pleurer quelqu\'un.\n\n?sad @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}
		    }else{
				error.sendError(message, "Commande inconnue.");
            	    }
	    }
    }
}
