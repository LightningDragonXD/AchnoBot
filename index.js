var Discord = require('discord.js');
var bot = new Discord.Client();
var config = require('./auth.json');
const ytdl = require('ytdl-core');
const help = require('./helpCommands');
const hug = require('./hug');
const punch = require('./punch');
const kiss = require('./kiss');
const sad = require('./sad');
const botname = require('./botname');
const pat = require('./pat');
const tickle = require('./tickle');
const bloodsuck = require('./bloodsuck');
const rolldice = require('./rolldice');
const dance = require('./dance');
const admin = require('./administration');
const pout = require('./pout');
const cr = require('./createRole');
const info = require('./infoUsers');
const prefix = "?";


bot.on('ready', function(){
	bot.user.setActivity(prefix+'help | '+bot.guilds.size+' serveurs', {type: 'WATCHING'}).catch(console.error);
});

async function musique(message){
	if(message.content[0] === prefix){
		let splitmusique = message.content.split(' ');
		if(splitmusique[0] === (prefix+"play")){
			const voiceChannel = message.member.voiceChannel;
			if(!voiceChannel){
				var embed = new Discord.RichEmbed()
						.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
						.setDescription("**"+message.author.toString()+", tu dois être dans le channel vocal.**")
						.setFooter('Créer par AchnoBot')
						.setTimestamp()
						.setColor("#FE9901")			
						message.channel.sendEmbed(embed);
			}
			const permissions = voiceChannel.permissionsFor(message.client.user);
			if(!permissions.has('CONNECT')){
				var embed = new Discord.RichEmbed()
						.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
						.setDescription("**"+message.author.toString()+", je peux pas rejoindre le channel vocal. Regarde mes permissions.**")
						.setFooter('Créer par AchnoBot')
						.setTimestamp()
						.setColor("#FE9901")			
						message.channel.sendEmbed(embed);
			}
			if(!permissions.has('SPEAK')){
				var embed = new Discord.RichEmbed()
						.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
						.setDescription("**"+message.author.toString()+", je peux pas parler dans le channel vocal. Regarde mes permissions.**")
						.setFooter('Créer par AchnoBot')
						.setTimestamp()
						.setColor("#FE9901")			
						message.channel.sendEmbed(embed);
			}
				var connection = await voiceChannel.join();
				var embed = new Discord.RichEmbed()
						.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
						.setDescription("**"+message.author.toString()+`, je peux pas rejoindre le channel vocal: ${error}**`)
						.setFooter('Créer par AchnoBot')
						.setTimestamp()
						.setColor("#FE9901")			
						message.channel.sendEmbed(embed);
			
			const dispatcher = connection.playStream(ytdl(splitmusique[1], {audioonly: true}))
					.on('end', () => {
						voiceChannel.leave();
					})
					.on('error', error => {
						console.error(error);
					});
					dispatcher.setVolumeLogarithmic(5 / 5);
		}
	}
}



bot.on('message', async message => {

	help(message);
	hug(message);
	punch(message);
	kiss(message);
	sad(message);
	botname(message);
	pat(message);
	tickle(message);
	bloodsuck(message);
	rolldice(message);
	dance(message);
	musique(message);
	admin(message);
	pout(message);
	cr(message);
	info(message);
	
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
	
bot.login(config.token);

