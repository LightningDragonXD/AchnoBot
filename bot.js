var Discord = require('discord.js');
var bot = new Discord.Client();
const prefix = "?";

bot.on('ready', function(){
	bot.user.setActivity(prefix+'help', {type: 'WATCHING'}).catch(console.error);
});

//Fonctions des commandes du bot

function sendError(message, description){
   var embed = new Discord.RichEmbed()
            .setColor("#FE0000")
            .setDescription(':x: '+ description)
            .setFooter('Créer par AchnoBot')     
            .setTimestamp()
  message.channel.sendEmbed(embed);
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
		}
	}
}

function funCommandes(message){
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"hug")){
			if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
		   			var hug = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" fait un gros câlin à "+message.guild.member(message.mentions.users.first())+" ! :flushed:")
					.setImage("https://i.imgur.com/rYrTbDQ.gif")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(hug);
				}
			}else if(splitfun.length === 1){
				 var hug = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot fait un gros câlin ! :flushed:")
					.setImage("https://i.imgur.com/rYrTbDQ.gif")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(hug);
			}else{
				sendError(message, "Commande inconnu");	
			}
		}
		if(splitfun[0] === (prefix+"punch")){
			 if(splitfun.length === 1){
				 var punch = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot te donne un coup ! :punch:")
					.setImage("https://i.imgur.com/1p128KA.gif")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(punch);
			}else if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				 var punch = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" donne un coup à "+message.guild.member(message.mentions.users.first())+"! :punch:")
					.setImage("https://i.imgur.com/1p128KA.gif")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(punch);
				}
			
			}else{
				sendError(message, "Commande inconnu");	
			}	
		}
	}
}

bot.on('message', message => {

	helpCommandes(message);
	funCommandes(message);
	
});

bot.login(process.env.TOKEN);

