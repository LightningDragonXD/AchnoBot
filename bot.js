var Discord = require('discord.js');
var bot = new Discord.Client();
const prefix = "<A>";

bot.on('ready', function(){
	bot.user.setActivity('<A>help', {type: 'WATCHING'}).catch(console.error);
});

bot.on('message', message => {
	if(message.content === prefix+"ping"){
		message.reply("pong");
	}
});

bot.login(process.env.TOKEN);
