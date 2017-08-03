exports.run = function(discord, bot, message, args) {

	// shuts down the bot

	if (message.author.id === 'YOUR ID HERE!') {
		message.channel.send('👋 Shutting down bot');

		// use small delay to make sure the shut down message is sent
		setTimeout(function() {
			process.exit(1)
		}, 1000)
	} else {
		message.channel.send('❌ You dont have permission to do shut the bot down.')
	}

}
