exports.run = function(discord, bot, message, args) {

	// changes the "playing" status of the bot

	if (message.author.id === 'YOUR ID HERE!') {
		bot.user.setGame(args.join(' '))
	} else {
		message.channel.send('❌ You dont have permission to change the playing status.')
	}

}
