const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === ';ping') {

    	message.reply('pong');  	}
     
    if (message.content === ';Bvn') {

    	message.reply('Bienvenue');  	}
    

    if(message.content === ';kick') { return message.channel.send(noReasonEmbed);}

  let kickEmbed = new Discord.RichEmbed()
  .setColor(botconfig.success)
  .addField(":white_check_mark: Success!", `${kUser} has been kicked for **${kReason}**.`)
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
