exports.run = function(discord, bot, message, args) {

	// generate a list with all commands

	// requires file system
	const fs = require('fs')

	// get all commands from the folder
	let files = fs.readdirSync('./commands/')
	let m = ''

	// loops through all files
	for (var i in files) {
		m += "``+"
		m += files[i].slice(0, -3)
		m += "`` "
	}

	message.channel.send(m)

}
