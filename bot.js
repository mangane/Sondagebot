const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === ';ping') {

    	message.reply('pong');  }
    
    if (message.content === ';help') { 
       
        message.reply('voici les commandes : `;ping` `;help`:wink:');}
        
    if (message.content === ';say') {
        
        message.reply('en cours...');}

    if (message.content.startsWith(config.modprefix ; "kick")) {
        if (message.member.roles.find('name', 'Wielder')) {
            let sub = message.content.substring(config.modprefix.length+5);
            let args = sub.split(" ");
            let userToKick = message.mentions.users.first();
            var reason = sub.substring(args[0].length+1);
            message.guild.member(userToKick).kick();
            message.guild.channels.find('name', 'mod-log').sendMessage("**User has felt the power of Hammer!** \n**User that was kicked**: " + userToKick + "\n**Reason**: " + reason + "\n**Date**: " + today + "\n**Time of Action**: " + time + "\n**Responsible Wielder**: " + message.author + "\n**Channel**: " + message.channel.name);
        }
    }

    if (message.content.startsWith(config.modprefix ; "ban")) {
        if (message.member.roles.find('name', 'Wielder')) {
            let sub = message.content.substring(config.modprefix.length+4);
            let args = sub.split(" ");
            let userToBan = message.mentions.users.first();
            var reason = sub.substring(args[0].length+1);
            message.guild.member(userToBan).ban();
            message.guild.channels.find('name', 'mod-log').sendMessage("**User has felt the power of Hammer!** \n**User that was banned**: " + userToBan + "\n**Reason**: " + reason + "\n**Date**: " + today + "\n**Time of Action**: " + time + "\n**Responsible Wielder**: " + message.author);
        }
    }

    if (message.content.startsWith(config.modprefix ; "warn")) {
        if (message.member.roles.find('name', 'Wielder')) {
            let sub = message.content.substring(config.modprefix.length+5);
            let args = sub.split(" ");
            let userToWarn = message.mentions.users.first();
            var reason = sub.substring(args[0].length+1);
            message.guild.member(userToWarn).sendMessage("Hello! You have been warned for: " + reason + " by " + message.author + "in" + message.guild.name);
            message.guild.channels.find('name', 'mod-log').sendMessage("**User has felt the power of Hammer!** \n**User that was warned**: " + userToWarn + "\n**Reason**: " + reason + "\n**Date**: " + today + "\n**Time of Action**: " + time + "\n**Responsible Wielder**: " + message.author);
        }
}
    });
    // THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
    
      
