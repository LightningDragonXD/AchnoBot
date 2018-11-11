var Discord = require('discord.js');
var bot = new Discord.Client();
const prefix = "<A>";

bot.on('ready', function(){
	bot.user.setActivity(prefix+'help', {type: 'WATCHING'}).catch(console.error);
});

bot.on('message', message => {
	/*if(message.content === prefix+"ping"){
		message.reply("pong");
	}*/
	//helpCommandes(message);
	
	if(message.content === prefix){
		let splitHelp = message.content.split(" ");
		if(splitHelp[0] === (prefix+"help")){
			if(splitHelp.length === 1){
				var help = new Discord.RichEmbed()
				.setTitle('Liste des Commandes')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Pour afficher l\'aide d\'une commande particulière ajouter en plus le nom de la commande')
				.addField('Prefix', prefix)
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
			}else{
				sendError(message, "Commande inconnue.");	
			}
		}else{
			sendError(message, "Commande inconnue.");	
		}
	}
});

bot.login(process.env.TOKEN);

//Fonctions des commandes du bot

function sendError(message, description){
	var erreur = new Discord.RichEmbed()
	.setColor("#FE0000")
	.setDiscription(':x:'+description)
	.setTimestamp()
	message.channel.sendEmbed(erreur);
}
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
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
			}else{
				sendError(message, "Commande inconnue.");	
			}
		}else{
			sendError(message, "Commande inconnue.");	
		}
	}
}
