var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
var bot = new Discord.Client();
function botname(message){
	if(message.content[0] === prefix){
		let splitfun = message.content.split(" ");
	 	if(splitfun[0] === (prefix+"botname")){
			if(splitfun.length === 2){
					bot.user.setUsername(splitfun[1]);
			}else{
				senderror(message, "Commande inconnue.");
			}
  		}
	}
}
module.exports = botname;