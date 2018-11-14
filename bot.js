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
				.addField('Commandes Fun','`hug`, `kiss`, `punch`, `botname`, `sad`, `pat`')
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
				.setDescription('Fait pleurer quelqu\'un.\n\n?sad ou ?sad @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "pat"){
				var help = new Discord.RichEmbed()
				.setTitle('Sad')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Fait une caresse sur la tête quelqu\'un.\n\n?pat ou ?pat @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "tickle"){
				var help = new Discord.RichEmbed()
				.setTitle('Sad')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Fait des chatouilles à quelqu\'un.\n\n?tickle ou ?tickle @quelqu\'un')
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
function kiss(message){
	var KISS = ["https://i.imgur.com/CJ4qnQ7.gif","https://i.imgur.com/OnabSmr.gif","https://i.imgur.com/dqd4b3w.gif","https://i.imgur.com/LhTCe1J.gif","https://i.imgur.com/OAD1UH7.gif"];
	var R_KISS = Math.floor(Math.random()*KISS.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"kiss")){
			 if(splitfun.length === 1){
				 var kiss = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot t'embrasse :kissing_heart:")
					.setImage(KISS[R_KISS])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(kiss);

			}else if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				 var kiss = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" embrassse "+message.guild.member(message.mentions.users.first())+" :kissing_heart:")
					.setImage(KISS[R_KISS])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(kiss);
				}
    						
			}else{
				sendError(message, "Commande inconnue.");	
			}
		}
	}
}
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
				sendError(message, "Commande inconnue.");
			}
		}
	}
}
function botname(message){
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
	 	if(splitfun[0] === (prefix+"botname")){
			if(splitfun.length === 2){
					bot.user.setUsername(splitfun[1]);
			}else{
				sendError(message, "Commande inconnue.");
			}
  		}
	}
}

function pat(message){
	var PAT = ["https://i.imgur.com/O3CldWi.gif","https://i.imgur.com/JNVYPKV.gif","https://i.imgur.com/usy9J6r.gif"];
	var R_PAT = Math.floor(Math.random()*PAT.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"pat")){
			if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				var pat = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" caresse la tête de "+message.guild.member(message.mentions.users.first())+":blush:")
					.setImage(PAT[R_PAT])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(pat);
				}
			}else if(splitfun.length === 1){
				var pat = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot te caresse la tête :blush:")
					.setImage(PAT[R_PAT])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(pat);
				
			
			}else{
				sendError(message, "Commande inconnue.");
			}
		}
	}
}

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
					.setDescription(message.author.toString()+" fait des chatouille à "+message.guild.member(message.mentions.users.first())+":joy:")
					.setImage(TICKLE[R_TICKLE])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(pat);
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
				sendError(message, "Commande inconnue.");
			}
		}
	}
}

function bloodsuck(message){
	var BLOOD = ["https://i.imgur.com/GXtaS5q.gif","https://i.imgur.com/SD9N08s.gif","https://i.imgur.com/xTRwnJ6.gif","https://i.imgur.com/LgF2cul.gif"];
	var R_BLOOD = Math.floor(Math.random()*BLOOD.length);
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
		if(splitfun[0] === (prefix+"bloodsuck")){
			if(splitfun.length === 2){
				if(message.guild.member(message.mentions.users.first())){
				var tickle = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" boit le sang de "+message.guild.member(message.mentions.users.first())+":smiling_imp:")
					.setImage(BLOOD[R_BLOOD])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(pat);
				}
			}else if(splitfun.length === 1){
				var tickle = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot boit ton sang :smiling_imp:")
					.setImage(BLOOD[R_BLOOD])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(tickle);
				
			
			}else{
				sendError(message, "Commande inconnue.");
			}
		}
	}
}

bot.on('message', message => {

	helpCommandes(message);
	hug(message);
	punch(message);
	kiss(message);
	sad(message);
	botname(message);
	pat(message);
	tickle(message);
	
});

bot.on('guildMemberRemove', member =>{

	    var aurevoir = new Discord.RichEmbed()
		.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
		.setDescription(`**${member.user.username}** est partie du serveur. Au plaisir de te revoir !`)
		.setImage("https://i.imgur.com/cMBHKyp.gif")
		.setFooter('Créer par AchnoBot')
		.setTimestamp()
		.setColor("#FE9901")			
		member.channel.sendEmbed(aurevoir);
				
        
});

bot.on('guildMemberAdd', member =>{
	    var BONJOUR = ["https://i.imgur.com/H67C3jV.gif","https://i.imgur.com/6XWJUPl.gif","https://i.imgur.com/Ro6K1b7.gif","https://i.imgur.com/LgF2cul.gif"];
	    var R_BONJOUR = Math.floor(Math.random()*BLOOD.length);
	    var bonjour = new Discord.RichEmbed()
		.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
		.setDescription(`La cavalerie est là ! Voilà **${member.user.username}** !`)
		.setImage(BONJOUR[R_BONJOUR])
		.setFooter('Créer par AchnoBot')
		.setTimestamp()
		.setColor("#FE9901")			
		member.channel.sendEmbed(bonjour);
			        
});
	
bot.login(process.env.TOKEN);

