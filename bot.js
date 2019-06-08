var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '-'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "552936847202975760") return;

  
  if (message.content.startsWith(prefix + 'stw')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`** ✅ Watch Now: ${argresult}**`)
} 

 
  if (message.content.startsWith(prefix + 'stl')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`** ✅ LISTENING Now: ${argresult}**`)
} 


if (message.content.startsWith(prefix + 'stn')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`** ✅ Username Changed To ${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'sta')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`** ✅ Avatar Changed Successfully To ${argresult}**`);
}

if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`** ✅ ${argresult}**`)
} 
if (message.content.startsWith(prefix + 'stg')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`** ✅ ${argresult}**`)
} 



});


client.login(process.env.BOT_TOKEN);
