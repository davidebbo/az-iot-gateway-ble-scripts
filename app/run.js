var fs = require('fs');
var spawn = require('child_process').spawn;
var bleConfig = require('./lib/bleconfig.js');
var util = require('./lib/util.js');

function run(configPath) {
	// change to directory
	process.chdir(bleConfig.samplePath);
	// set crt
	// export SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt
	process.env['SSL_CERT_FILE'] = '/etc/ssl/certs/ca-certificates.crt';
	// run sample
	var ps = spawn('./' + bleConfig.sampleBinary, [configPath], {
		stdio: 'inherit'
	});
	// re-direct the Ctrl-C to this process
	process.on('SIGINT', ps.kill);
}

(function() {
	// Step1. check binary exist
	new Promise((resolve, reject) => {
			// check exits
			var binaryPath = bleConfig.samplePath + bleConfig.sampleBinary;
			fs.exists(binaryPath, (exists) => {
				if (!exists) {
					reject(binaryPath + ' not found');
				} else {
					resolve();
				}
			});
		})
		// Step2. deploy device
		.then(() => {
			return new Promise((resolve, reject) => {
				bleConfig.create({}, (stdout, error) => {
					if (error) {
						reject(error);
					} else {
						resolve(stdout);
					}
				})
			});
		})
		// Step3. run sample
		.then(run).catch(util.errorHandler);
})();