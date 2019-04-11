var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');

function infoUser(message){
    if(message.content[0] === prefix){
        let splitinfo = message.content.split(' ');
        if(splitinfo[0] === (prefix+"avatar")){
            if(splitinfo.length === 1){
                var avatar = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+", j'ai récuperé ta photo ! héhé")
					.setImage(message.author.avatarURL)
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
                    message.channel.sendEmbed(avatar);
            }else if(splitinfo.length === 2){
                const member = message.guild.member(message.mentions.users.first());
                const mention = message.mentions.users.first(); 
                if(member){
                    var avatar = new Discord.RichEmbed()
					.setAuthor('AchnoBot', "https://i.imgur.com/pjV580Z.jpg")
					.setDescription(message.author.toString()+", j'ai récuperé la photo de "+member+" ! héhé")
					.setImage(mention.avatarURL)
					.setFooter('Créer par AchnoBot')
					.setTimestamp()
					.setColor("#FE9901")			
                    message.channel.sendEmbed(avatar);
                }
            }else{
                senderror(message, "Commande inconnue.");
            }
        }
    }
}
module.exports = infoUser;