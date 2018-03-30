const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Online e em ${client.guilds.size} servidores, e contando todos eles, dão ${client.users.size} usuários !`);
  client.user.setGame(`by Master#1028 h!help`);
});

client.on('message', msg => {
  if (msg.content === 'h!ping') {
    msg.reply('pong');
  }
});

client.on('message', message => {
    if (message.content === 'h!avatar') {
      message.reply(message.author.avatarURL);
    }
  });

client.login('Mzg5NTgwODk0ODYxNjU2MDY1.DZ6zcw.yaF7rM1A9iCvt4ssnWSehJDZSng');

client.on('message', message => {
let responseObject = {
    "h!Oi" : "Olá \nComo vai ?",
    "h!oi" : "Olá \nComo vai ?",
    "h!Bem" : "👍",
    "h!bem" : "👍",
    "h!Mal" : "Putz, ta igual eu",
    "h!mal" : "Putz, ta igual eu",
    "h!Eai" : "Eae cara, tudo blz ?",
    "h!eai" : "Eae cara, tudo blz ?",
    "h!Eae" : "Eae cara, tudo blz ?",
    "h!eae" : "Eae cara, tudo blz ?",
    "h!Sim" : "Mais um pro grupo 😎",
    "h!sim" : "Mais um pro grupo 😎",
    "h!Não" : "https://tenor.com/xDBd.gif",
    "h!não" : "https://tenor.com/xDBd.gif",
    "h!nao" : "https://tenor.com/xDBd.gif",
    "h!N" : "https://tenor.com/xDBd.gif",
    "h!n" : "https://tenor.com/xDBd.gif",
    "h!E você ?" : "To Mal ;-;",
    "h!E você?" : "To Mal ;-;",
    "h!E voce ?" : "To Mal ;-;",
    "h!E voce?" : "To Mal ;-;",
    "h!E vc ?" : "To Mal ;-;",
    "h!E vc?" : "To Mal ;-;",
    "h!e você ?" : "To Mal ;-;",
    "h!e você?" : "To Mal ;-;",
    "h!e voce ?" : "To Mal ;-;",
    "h!e voce?" : "To Mal ;-;",
    "h!e vc ?" : "To Mal ;-;",
    "h!e vc?" : "To Mal ;-;",
    "h!Tô triste" : "O que ouve ?",
    "h!tô triste" : "O que ouve ?",
    "h!To triste" : "O que ouve ?",
    "h!to triste" : "O que ouve ?"
};

    if (message.content.startsWith('h!help')){
        message.channel.send('***Welcome To Brawlhalla !*** (foi mal, me empolguei kkkkk) \n\n*Comandos* \n\n```Sociais```  \nEscreva alguma coisa e veja se o bot responde ! (escreva o h! antes de qualquer fala !) \n\n```Diversos``` \n`h!roleta` Uma roleta russa, te desafio a ganhar nesse game \n`h!help` O comando que você acabou de usar \n`h!invite` Quer eu em seu servidor ? Use esse comando !');
    }

    if (message.content.startsWith('h!invite')){
        message.channel.send('https://discordapp.com/oauth2/authorize?client_id=389580894861656065&scope=bot&permissions=2146958591');
    }

if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}

if(message.content.startsWith("h!roleta")){
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if(randomNumber == 2,1,3){
        message.reply("Perdeu ! \n`Ou para os mais entrertidos, Morreu !`");
    }
    else{
        message.reply("Ganhou !\n`Ou para os mais entrertidos, Sobreviveu !`");
    }
}
});
