const gulp = require('gulp'),
	run = require('gulp-run-command').default;

exports.default = function(target)
{
	if(!target || typeof target != "string")
		throw new Error("Invalid path");
	
	async function callback()
	{
		var result;
		
		console.log("@perry-rylance/watchful-autoload-generator :- Updating from " + target);
		result = run("php node_modules/@perry-rylance/watchful-autoload-generator/phpab.phar --nolower --quiet --output autoload.php " + target)();
		console.log("@perry-rylance/watchful-autoload-generator :- Success");
		
		return result;
	}
	
	callback();
	
	console.log("@perry-rylance/watchful-autoload-generator :- Watching " + target);
	gulp.watch(target + "/**/*.php", callback);
}