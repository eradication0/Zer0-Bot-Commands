exports.run = function(discord, bot, message, args) {

	// evaluate code

	if (message.author.id === 'YOUR ID HERE!') {
		try {
			const com = eval(args.join(' '))
			message.channel.send('💻 ' + com)
		} catch (err) {
			message.channel.send('❌' + err)
		}
	} else {
		message.channel.send('❌ You dont have permission to evaluate.')
	}

}
