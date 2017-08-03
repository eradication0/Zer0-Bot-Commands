exports.run = function(discord, bot, message, args) {

	// urban dictionary lookup

	// uses "relevant-urban" npm package
	const urban = require('relevant-urban');

	urban(args.join(" ").then((result) => {
		message.channel.send("🔍 **Definition: **" + result.definition)
	})}
