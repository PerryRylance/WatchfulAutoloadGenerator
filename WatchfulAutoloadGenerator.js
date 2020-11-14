const gulp = require('gulp'),
	run = require('gulp-run-command').default;

exports.default = function(path)
{
	if(!path || typeof path != "string")
		throw new Error("Invalid path");
	
	async function callback()
	{
		return run("php node_modules/@perry-rylance/watchful-autoload-generator/phpab.phar --nolower --quiet --output autoload.php " + path)();
	}
	
	gulp.watch(path + "/**/*.php", callback);
}