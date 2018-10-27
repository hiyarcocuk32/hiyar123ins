var prefix = ayarlar.token

if (message.channel.type === "dm") { 
    var args = message.content.split(" ").slice(0)
    var args = args.slice(0).join(" ")

    if (message.content.startsWith(prefix)) return message.channel.send(":x: Sunucularda Kullan! :x:")
    message.channel.send("Yöneticiye Atablirsin sadece! :incoming_envelope:");
    if (message.content.startsWith(prefix)) return
    if (args.length > 256) return message.reply("256 Karakterden fazla kullanamazsýn")
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("DM Geldi!")
        .addField(args, "Gönderildi: " + message.author.username + " ID: " + message.author.id)
    bot.guilds.get("501775306546216960").channels.get("505686242835431424").send(embed)
}


if (message.content.startsWith(prefix + "reply")) {
    if (message.author.id !== "486884339934691329") return message.reply('Sen Bunu Kullanamazsýn Tirrek!!')
    var args = message.content.split(" ").slice(0)
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[1]
    if (isNaN(args[1])) return message.reply("Bu Bir ID Deðil!")
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Sana Cevap Verdi!")
        .setDescription(Rargs)
        .setFooter("Sana Gönderdi: " + message.author.username + " !")
    bot.users.get(userID).send(embed)
    message.channel.send("Send!").catch(console.error)

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yöneticidm',
  description: "Yöneticiye Dm At",
  usage: 'yöneticidm <mesaj>'
};