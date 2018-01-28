const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready master!');
});

client.on('message', message => {

  let content = message.content;

  if (content === 'ping') {
    message.reply('pong');
  }

  else if (content.includes('add')){
        var _sum = content.split(" ");
        message.reply(parseInt(_sum[1], 10) +  parseInt(_sum[2], 10));
    }

    else if(content.includes("hola") || content.includes("hi")){
        message.reply("Hi There");
    }
});


client.login(process.env.BOT_TOKEN);
