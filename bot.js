var Discord = require('discord.js');
var bot = new Discord.Client();
var dispatcher;
const prefix = "?";

bot.on('ready', function(){
	bot.user.setActivity(prefix+'help, je suis sur '+bot.guilds.size+' serveurs', {type: 'WATCHING'}).catch(console.error);
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
				.addField('Commandes Fun','`hug`, `kiss`, `punch`, `botname`, `sad`, `pat`, `tickle`, `bloodsuck`, `roll`')
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
				.setTitle('Pat')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Fait une caresse sur la tête quelqu\'un.\n\n?pat ou ?pat @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "tickle"){
				var help = new Discord.RichEmbed()
				.setTitle('Tickle')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Fait des chatouilles à quelqu\'un.\n\n?tickle ou ?tickle @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "bloodsuck"){
				var help = new Discord.RichEmbed()
				.setTitle('bloodsuck')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Boit le sang de quelqu\'un.\n\n?bloodsuck ou ?bloodsuck @quelqu\'un')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(help);
				}else if(splitHelp[1] === "roll"){
				var help = new Discord.RichEmbed()
				.setTitle('Roll')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Permet de lancer des dés.\n\n?roll ou ?roll 1d100')
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
					.setDescription(message.author.toString()+" embrasse "+message.guild.member(message.mentions.users.first())+" :kissing_heart:")
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
					.setDescription(message.author.toString()+" fait des chatouilles à "+message.guild.member(message.mentions.users.first())+":joy:")
					.setImage(TICKLE[R_TICKLE])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(tickle);
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
				var blood = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+" boit le sang de "+message.guild.member(message.mentions.users.first())+":smiling_imp:")
					.setImage(BLOOD[R_BLOOD])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(blood);
				}
			}else if(splitfun.length === 1){
				var blood = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot boit ton sang :smiling_imp:")
					.setImage(BLOOD[R_BLOOD])
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(blood);
				
			
			}else{
				sendError(message, "Commande inconnue.");
			}
		}
	}
}
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
					sendError(message, "Commande incorrecte. Faites ?roll 1d100");
				}
				
				
			}else{
				sendError(message, "Commande inconnue.");
			}
		}
	}
}

function join(message){
	if(message.content[0] === prefix){
		let splitjoin = message.content.split(" ");
		if(splitjoin[0] === (prefix+"join")){
			if(splitjoin.length === 1){
				if(message.member.voiceChannel){
					message.member.voiceChannel.join().then(connection => {
					var join = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot a bien rejoint le channel !")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(join);
					});
				}else{
					var join = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("Vous devez être connecté à un channel !")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE0000")			
					message.channel.sendEmbed(join);
				}
			
			}else{
				sendError(message, "Commande inconnue.");
			}
		}
	}
}

function quit(message){
	if(message.content[0] === prefix){
		let splitquit = message.content.split(" ");
		if(splitquit[0] === (prefix+"quit")){
			if(splitquit.length === 1){
				if(message.member.voiceChannel){
				message.member.voiceChannel.leave();
					var quit = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription("AchnoBot a bien quitté le channel !")
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
					message.channel.sendEmbed(quit);
				}
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
	bloodsuck(message);
	rolldice(message);
	join(message);
	quit(message);
});

bot.on('guildMemberRemove', member =>{
	if(member.guild.channels.find("name", "general")){
	member.guild.channels.find("name", "general").send(`**${member.user.username}** est partie du serveur. Au plaisir de te revoir !`)
	member.guild.channels.find("name", "general").sendFile("https://i.imgur.com/cMBHKyp.gif")
	}else if(member.guild.channels.find("name", "arrivé-départ")){
	member.guild.channels.find("name", "arrivé-départ").send(`**${member.user.username}** est partie du serveur. Au plaisir de te revoir !`)
	member.guild.channels.find("name", "arrivé-départ").sendFile("https://i.imgur.com/cMBHKyp.gif")
	}
});

bot.on('guildMemberAdd', member =>{
	var BONJOUR = ["https://i.imgur.com/H67C3jV.gif","https://i.imgur.com/6XWJUPl.gif","https://i.imgur.com/Ro6K1b7.gif","https://i.imgur.com/Khl3DLb.gif"];
	var R_BONJOUR = Math.floor(Math.random()*BONJOUR.length);
	if(member.guild.channels.find("name", "general")){
	 member.guild.channels.find("name", "general").send(`La cavalerie est là ! Voilà **${member.user.username}** !`)
	 member.guild.channels.find("name", "general").sendFile(BONJOUR[R_BONJOUR])
	}else if(member.guild.channels.find("name", "arrivé-départ")){
	 member.guild.channels.find("name", "arrivé-départ").send(`La cavalerie est là ! Voilà **${member.user.username}** !`)
	 member.guild.channels.find("name", "arrivé-départ").sendFile(BONJOUR[R_BONJOUR])
	}	        
});
	
bot.login(process.env.TOKEN);

