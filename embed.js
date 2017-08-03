exports.run = function(discord, bot, message, args) {

	// an example embed

    const embed = new discord.RichEmbed()
	.setThumbnail(message.member.guild.iconURL)
	.setAuthor(message.member.guild.name, message.member.guild.iconURL)
	.setTitle('This is a Title')
	.setDescription('The text of the body, essentially')
	.setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
	.setColor('#CA4746')

	.addField('Titel', 'Field')
	.addField(':thinking:', ':thinking:')

	.setFooter('Footer', message.member.guild.iconURL)
	.setTimestamp()
	message.channel.send({embed})

}
