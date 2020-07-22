const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '';//TOKEN REMOVED

bot.on('ready', () =>{
  console.log("Logged in");
    var groupChannel = bot.channels.cache.get('696402961064132623');
    var member = groupChannel.guild.members.cache.get('433726236468969474');
    console.log(member);
    console.log(groupChannel);
})
//bot.channels.fetch('696402961064132618')
   // .then(channel => console.log(channel.name))
  //  .catch(console.error);


let eliteUsers = ['433726236468969474']

bot.on('message', message => {
  let args = message.content.split(" ");

 // if (message.content === 'dmall') {

  if (message.channel.id !== '696402961064132623') {
console.log(message.channel.id)

    groupChannel.members.forEach(member => {

      //message.channel.send(groupChannel.members);

      if (eliteUsers.indexOf(member.id) > -1)

        message.member.send("Test");

    })
  }



 // }


  //for(i=0;i<recipient.length;i++){
  //recipient[1].send("test");
  //}

  /*if (args[0] == 'test'){
    message.channel.send("Success "+ args[1]);
  }*/


})
bot.login(token);
