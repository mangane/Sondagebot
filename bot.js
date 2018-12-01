const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === ';ping') {

    	message.reply('pong');  	}
if (command === "prefix") {

	guildConf[message.guild.id].prefix = args[0];	if (!guildConf[message.guild.id].prefix) {

		guildConf[message.guild.id].prefix = config.prefix; // If you didn't specify a Prefix, set the Prefix to the Default Prefix

	}
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
