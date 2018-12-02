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

    if (message.content.startsWith(';sondage')) {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    var embed = new Discord.RichEmbed()
        embed.setDescription("Sondage")
        embed.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
        embed.setColor('#01A1FE')
    message.guild.channels.find("name", "sondage").sendEmbed(embed)
    .then(function (message){
        message.react("✔")
        message.react("✘")
    });
   
    // THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
    
      
