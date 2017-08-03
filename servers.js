exports.run = function(discord, bot, message, args) {

	// lists all servers the bot joined

	if (message.author.id === 'YOUR ID HERE!') {
		let m = ''
		bot.guilds.forEach(guild => {

			// makes sure not to create too long messages
			if (m.length() >== 1000) {
				message.channel.send(m);
				m = ''
			} else {
				// adds the server name and id to the list. Example: (Discord.js Official [222078108977594368])
				m += '(' + guild.name + '[' + guild.id + ']) '
			}
		});
		message.channel.send(m);
	} else {
		message.channel.send('❌ You dont have permission to list the servers.')
	}

}
