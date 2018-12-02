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
        message.reply('Hey, I\'m a reply!') 
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`)) 
            .catch(console.error);}
    });
        
   
    // THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
    
      
