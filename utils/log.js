const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#ff0000").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#ff0000").bold('[ Error ] » ') + data);
			break;
		default:
				console.log(chalk.bold.hex("#00BFFF").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FF7F").bold('[ Naomi ]') + data);
			break;
		case "error":
		console.log(chalk.bold.hex("#FFFF00").bold('[ Naomi ]') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FF7F").bold(`[ Naomi ]`) + data);
			break;
	}
}