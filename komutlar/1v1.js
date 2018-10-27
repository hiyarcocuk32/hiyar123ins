const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazs�n.').setFooter('', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 2) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription(message.author.tag + ', kullan�m: sb!1vs1 <@kullan�c�> <@kullan�c�> .').setFooter('', client.user.avatarURL).setTimestamp());
    var sans = ["10'a","1'e","20'ye","30'a"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Sava� ba�lad�!').setFooter('Rahats�zlar�n  Sava�� yap�l�yor.', client.user.avatarURL).setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Sava��l�yor Pat K�t.').setFooter('Profesyonellerin  Sava�� yap�l�yor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Sava��l�yor Pat K�p.').setFooter('Profesyonellerin  Sava�� yap�l�yor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Sava��l�yor Pat k�t.').setFooter('Profesyonellerin  Sava�� yap�l�yor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Sava� Sonu�lan�yor.').setFooter('Profesyonellerin  Sava�� yap�l�yor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Sava� bitti!').setFooter('Profesyonellerin  Sava�� yap�l�yor.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Sava��n Galibi: **' + user.tag+'** Helal olsun sana Ne Vurdun Be Ad�m�n Can�n� 100 den **'+ sonuc +'** Kadar D���rd�n Ve Adam Pes Etti.').setImage("https://media1.giphy.com/media/6fReqjdbFYXJu/giphy.gif").setFooter('1vs1 Sava�� Bitti.', client.user.avatarURL).setTimestamp()))
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '1vs1',
  description: 'Se�ti�iniz 2 ki�iyi sava�t�r�rs�n�z.',
  usage: '1vs1 <@kullan�c�> <@kullan�c�>'
};