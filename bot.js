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
        
    if (message.author.id !== bot.user.id && message.content){ 
     
        message.channel.sendMessage(message.content); 
    } 
    
    });
    // THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
    
      
