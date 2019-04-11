var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');
function createRole(message){
    if(message.content[0] === prefix){
        let splitcreate = message.content.split(' ');
        if(splitcreate[0] === (prefix+"createRole")){
            if(splitcreate.length === 2){
                message.guild.createRole({
                    name: splitcreate[1],
                    color: "RANDOM",
                    hoist: true,
                    position: 1,
                    SPEAK: true,
                    CREATE_INSTANT_INVITE: false,
                    KICK_MEMBERS: false,
                    BAN_MEMBERS: false,
                    ADMINISTRATOR: false,
                    MANAGE_CHANNELS: false,
                    MANAGE_GUILD: false,
                    ADD_REACTIONS: true,
                    READ_MESSAGES: true,
                    SEND_MESSAGES: true,
                    SEND_TTS_MESSAGES: false,
                    MANAGE_MESSAGES: false,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true,
                    MENTION_EVERYONE: false,
                    EXTERNAL_EMOJIS: true,
                    CONNECT: true,
                    MUTE_MEMBERS: false,
                    DEAFEN_MEMBERS: false,
                    MOVE_MEMBERS: false,
                    USE_VAD: true,
                    CHANGE_NICKNAME: true,
                    MANAGE_NICKNAMES: false,
                    MANAGE_ROLES_OR_PERMISSIONS: false,
                    MANAGE_WEBHOOKS: false,
                    MANAGE_EMOJIS: false
                });
                var role = new Discord.RichEmbed()
				.setTitle('Create Role')
				.setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
				.setDescription('Le rôle **'+splitcreate[1]+'** a été crée.')
				.setTimestamp()
				.setColor("#0155FE")
				message.channel.sendEmbed(role);
            }else{
                senderror(message, "Commande inconnue.");
            }
        }
    }
}
module.exports = createRole;