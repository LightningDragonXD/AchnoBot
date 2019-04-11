var senderror = require('./sendError');
const prefix = '?';
var Discord = require('discord.js');

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function administration(message){
    if(message.content[0] === prefix){
        let splitAdmin = message.content.split(' ');
        if(splitAdmin[0] === (prefix+"kick")){
            if(splitAdmin.length === 2){
                const user = message.mentions.users.first();
                if(user){
                    const member = message.guild.member(user);
                    if(member){
                        if(!message.member.hasPermission("KICK_MEMBERS")){
                         var kick = new Discord.RichEmbed()
				        .setTitle('Kick')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription('Vous n\'avez pas la permission.')
				        .setTimestamp()
				        .setColor("#FE0000")
				        message.channel.sendEmbed(kick);
                        }else{
                        member.kick('Optional reason that will display in the audit logs').then(() =>{
                        var kick = new Discord.RichEmbed()
				        .setTitle('Kick')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription('La personne a bien été kick. ça fait du bien un peu de calme.')
				        .setTimestamp()
				        .setColor("#0155FE")
				        message.channel.sendEmbed(kick);
                        }).catch(err =>{
                            var kick = new Discord.RichEmbed()
				        .setTitle('Kick')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription('Je ne suis pas autorisé à kick le membre.')
				        .setTimestamp()
				        .setColor("#FE0000")
                        message.channel.sendEmbed(kick);
                        console.error(err);
                        });
                        }
                    }
                }else{
                    var kick = new Discord.RichEmbed()
				        .setTitle('Kick')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription("Tu n'as pas mentionné le membre à kick.")
				        .setTimestamp()
				        .setColor("#FE0000")
				        message.channel.sendEmbed(kick);
                }
                
            }else{
                senderror(message, "Commande inconnue.")
            }
        }else if(splitAdmin[0] === (prefix+"ban")){
            if(splitAdmin.length === 2){
                const user = message.mentions.users.first();
                if(user){
                    const member = message.guild.member(user);
                    if(member){
                        if(!message.member.hasPermission("BAN_MEMBERS")){
                            var ban = new Discord.RichEmbed()
				        .setTitle('Ban')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription('Vous n\'avez pas la permission.')
				        .setTimestamp()
				        .setColor("#FE0000")
                        message.channel.sendEmbed(ban);
                        }else{
                        member.ban({
                            reason: "Méchant bonhomme !"
                        }).then(()=>{
                        var ban = new Discord.RichEmbed()
				        .setTitle('Ban')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription('La personne a bien été ban. Le marteau du jugement a frappé.')
				        .setTimestamp()
				        .setColor("#0155FE")
                        message.channel.sendEmbed(ban);
                        
                        }).catch(err =>{
                        var ban = new Discord.RichEmbed()
				        .setTitle('Ban')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription('Je ne suis pas autorisé à ban le membre.')
				        .setTimestamp()
				        .setColor("#FE0000")
                        message.channel.sendEmbed(ban);
                        console.error(err);
                        });
                    }
                    }else{
                        var ban = new Discord.RichEmbed()
				        .setTitle('Ban')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription("La personne n'est pas dans le serveur.")
				        .setTimestamp()
				        .setColor("#0155FE")
                        message.channel.sendEmbed(ban);
                    }
                }else{
                    var ban = new Discord.RichEmbed()
				        .setTitle('Ban')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription("Tu n'as pas mentionné le membre à kick.")
				        .setTimestamp()
				        .setColor("#FE0000")
				        message.channel.sendEmbed(ban);
                }
            }else{
                senderror(message, "Commande inconnue.")
            }

            
        }else if(splitAdmin[0] === (prefix+"clear")){
            if(splitAdmin.length === 2){
                if(!message.member.hasPermission("MANAGE_MESSAGES")){
                    var clear = new Discord.RichEmbed()
                    .setTitle('Clear')
                    .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
                    .setDescription('Vous n\'avez pas la permission.')
                    .setTimestamp()
                    .setColor("#FE0000")
                    message.channel.sendEmbed(clear);
                }else{

                    message.channel.fetchMessages({
                        limit: splitAdmin[1]
                    }).then(msgCollection => {
                       msgCollection.forEach(message => {
                          message.delete();
                        })
                    });
                    var clear = new Discord.RichEmbed()
				        .setTitle('Clear')
				        .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
        				.setDescription("Les messages ont été supprimés.")
				        .setTimestamp()
				        .setColor("#0155FE")
                        message.channel.sendEmbed(clear);
                }
                        
            }else{
                senderror(message,"Commande inconnue.");
            }
        }else if(splitAdmin[0] === (prefix+"mute")){
            if(splitAdmin.length === 2){
                const user1 = message.mentions.users.first();
                if(user1){
                    const member = message.guild.member(user1);
                    if(member){
                        if(!message.member.hasPermission("MANAGE_MESSAGES")){
                            var mute = new Discord.RichEmbed()
                            .setTitle('Mute')
                            .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
                            .setDescription('Vous n\'avez pas la permission.')
                            .setTimestamp()
                            .setColor("#FE0000")
                            message.channel.sendEmbed(mute);
                        }else{
                            let role = message.guild.roles.find(r => r.name === "MUTE");
                            let tomute = message.guild.member(message.mentions.users.first());
                            if(!role){
                                try{
                                    role = await message.guild.createRole({
                                        name: "MUTE",
                                        color: "#000000",
                                        permissions: []
                                    });
                                    message.guild.channels.forEach(async (channel, id) => {
                                        await channel.overwritePermissions(role, {
                                          SEND_MESSAGES: false,
                                          ADD_REACTIONS: false
                                        });
                                      });
                                }catch(e){
                                    console.log(e.stack);
                                }
                            }
                            if(tomute.roles.has(role.id)){
                                var mute = new Discord.RichEmbed()
                                .setTitle('Mute')
                                .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
                                .setDescription('L\'utilisateur est déjà mute.')
                                .setTimestamp()
                                .setColor("#FE0000")
                                message.channel.sendEmbed(mute);
                            }
                            await(tomute.addRole(role));
                            var mute = new Discord.RichEmbed()
                                .setTitle('Mute')
                                .setAuthor('AchnoBot',"https://i.imgur.com/pjV580Z.jpg")
                                .setDescription('L\'utilisateur est bien mute. Le silence.. 😃')
                                .setTimestamp()
                                .setColor("#0155FE")
                                message.channel.sendEmbed(mute);
                        }
                    }
                }
            }else{
                senderror(message, "Commande inconnue.");
            }
        }
    
    }
}
module.exports = administration;