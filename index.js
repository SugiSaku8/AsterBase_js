const fs = require("fs");
const base = {
	//AutoRecoveryService
	arsJSON: function (pass) {
		fs.readFileSync(pass, "utf-8", function () {
			try {
				let orjson = JSON.parse(file);
			} catch (err) {
                console.log("A flaw was found in the JSON file. \n Initialize the file.")
				fs.appendFile(pass, "", function (err) {
					console.warn(`Error:${err}`);
				});
			}
		});
	},
    //AutoMalwareScan
	ams: function () {
		const scanFolder = "./";
		const quarantineFolder = "/chest";
		exec(
			`clamscan -r --move=${quarantineFolder} ${scanFolder}`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					return;
				}
				console.log(`stdout: ${stdout}`);
				console.error(`stderr: ${stderr}`);
			},
		);
	},
    
};

module.exports = bases;