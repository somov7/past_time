const vscode = require('vscode');

function activate(context) {

	let startDate = new Date();
	let setDate;

	let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	vscode.commands.registerCommand('extension.setTime', function () {
		setDate = new Date();

		let month = setDate.getMonth();
		let day = setDate.getDate();
		let hour = setDate.getHours();
		let min = setDate.getMinutes();
		let sec = setDate.getSeconds();

		vscode.window.showInformationMessage("Time is set to " + day + " " + monthName[month] + " " + hour + ":" + min + ":" + sec);
	});

	vscode.commands.registerCommand('extension.timePast', function () {
		
		if(setDate == undefined){
			vscode.window.showErrorMessage('Time was not set');
			return;
		}

		let date = new Date();
		let dateDiff = +date - +setDate; 

		dateDiff /= 1000;
		let sec = Math.floor(dateDiff % 60);
		dateDiff /= 60;
		let min = Math.floor(dateDiff % 60);
		let hour = Math.floor(dateDiff / 60); 

		vscode.window.showInformationMessage('Time past since last set time: ' + hour + " hour(s) " + min + " minute(s) " + sec + " second(s)");		
	});
	
	vscode.commands.registerCommand('extension.timePastVSC', function () {
		let date = new Date();
		let dateDiff = +date - +startDate; 

		dateDiff /= 1000;
		let sec = Math.floor(dateDiff % 60);
		dateDiff /= 60;
		let min = Math.floor(dateDiff % 60);
		let hour = Math.floor(dateDiff / 60); 

		vscode.window.showInformationMessage('VS Code is running for ' + hour + " hour(s) " + min + " minute(s) " + sec + " second(s)");
	});

	vscode.commands.registerCommand('extension.reminderHour', function () {
		setTimeout(() => {  vscode.window.showInformationMessage("Reminder!"); }, 3600000);		
	});

}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
