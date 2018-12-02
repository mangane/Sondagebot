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
    
if (message.content.startsWith('!kick')) {
const user = message.mentions.users.first();
if (user) {
const member = message.guild.member(user);
 if (member) {
member.kick('Optional reason that will display in the audit logs').then(() => {
message.reply(`Successfully kicked ${user.tag}`); }).catch(err => {
message.reply('I was unable to kick the member');}
});
     
        
   // THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
    
      
