const Discord = require('discord.js');
const client = new Discord.Client();

//Evento de conexion
client.on('ready', ()=>{
    console.log(`Bot is ready as ${client.user.tag}`);

    //Cambiar el estado del bot
    client.user.setStatus('dnd');
    //Conocer el estado actual del bot
    console.log(client.user.presence.status);
});

//evento de mensaje
client.on('message', async msg =>{
    //Recibiendo el mensaje
    //console.log(msg.content);
    if(msg.content === 'ping'){
        msg.reply('pong');
    }
    
    if(msg.content === 'hello'){
        msg.channel.send(`Hi ${msg.author}`);
    }

    if(msg.content.includes('!test')){
        msg.channel.send('Glad your are testing');
    }

    if(msg.content === '!fazt'){
        msg.channel.send('http://youtube.com/fazttech');
    }

    if(msg.content === 'rip'){
        const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        msg.channel.send(`${msg.author},`, attachment);
    }

    if(msg.content === 'how to embed'){
        const embed = new Discord.MessageEmbed()
        .setTitle('A slick little embed')
        .setColor(0xff0000)
        .setDescription('Hello, this is a slick embed!')
        .setAuthor('Hawk', 'https://picsum.photos/200/300');

        msg.channel.send(embed);
    }

    if(msg.content === '!clear'){
        msg.channel.bulkDelete(100);
        console.log('Messages Deleted');
    }
});

client.login('Nzk0MDIxNDk3ODE5MTAzMjcz.X-0wJQ.x1tecEyqJw_2Juk9vRUC53oD3K0');