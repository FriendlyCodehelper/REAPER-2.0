const Discord = module.require("discord.js");

module.exports = {
    name: "salty",
    description: "Another fun command",
    run: async(client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    let salty = `https://api.alexflipnote.dev/salty?image=${avatar}` + `.gif`;
    if (!avatar) {
        return message.channel.send("You need to mention someone")
        }
        let embed = new Discord.MessageEmbed()
        .setImage(salty)
        .setColor("RANDOM");
        message.channel.send(embed);
    }
}