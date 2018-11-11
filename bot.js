var Discord = require('discord.js');
var bot = new Discord.Client();
var ytdl = require('ytdl-core');
const queue = new Map();
var servers = {};
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
			    	
    				}					
		    }else{
				sendError(message, "Commande inconnue.");
            	    }
	    }
    }
}

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
        			sendError(message, "Commande inconnu");		
    			}	
		}
	}
}
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
				sendError(message, "Commande inconnue.");	
			}
		}
	}
}
function play(connection, message){
	var server = servers[message.guild.id];	
	
	server.dispatcher = connection.playStream(ytdl(server.queue[0], [filter: "audioonly"]));
	server.queue.shift();
	server.dispatcher.on("end", function(){
		if(server.queue[0]) play(connection, message);
		
		else connection.disconnect();
	});
									 
}
function musique(message){
	if(message.content[0] === prefix){
		let splitmusic = message.content.split(" ");
		if(splitmusic[0] === (prefix+"play")){
			if(!splitmusic.length === 1){
				message.channel.reply("il manque un lien youtube");
			}else if(!message.member.voiceChannel){
					message.channel.reply(":x: Tu dois être dans un salon vocal !");
			}else if(!servers[message.guild.id]) servers[message.guild.id] = {queue: []};
			var server = servers[message.guild.id];
			server.queue.push(splitmusic[1]);
			if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
				play(connection, message)	
			});
			
		}else if(splitmusic[0] === (prefix+"skip")){
			 if(!message.member.voiceChannel){
				 message.channel.reply(":x: Tu dois être dans un salon vocal");
				 return;
			 }
			var server = servers[message.guild.id];
			if(server.dispatcher) server.dispatcher.end();
			
		}else if(!message.member.voiceChannel){
			 return message.channel.reply(":x: Tu dois être dans un salon vocal");
			message.member.voiceChannel.leave();
		}else {
			sendError(message, "Commande inconnue.");	
		}
	}
}

bot.on('message', message => {

	helpCommandes(message);
	hug(message);
	punch(message);
	musique(message);
	
});

bot.login(process.env.TOKEN);

