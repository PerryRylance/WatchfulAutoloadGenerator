# WatchfulAutoloadGenerator
This is a PHP autoloader generator designed to work with files local to your project. Available as a node plugin, this tool is designed to be installed via NPM and then utilised in your gulpfile.

This tool uses a precompiled version of [Autoload](https://github.com/theseer/Autoload), with thanks to [theseer](https://github.com/theseer).

## Requirements

- Node.js
- PHP

Both of which must be available on the command line.

## Installation

I recommend installing this tool via NPM:

`npm install @perry-rylance/watchful-autoload-generator`

## Usage

This tool exports a single function which will recursively watch PHP files in the specified directory.

The generated class autoloader file will be outputted to autoload.php in your project root.

```
generator = require("@perry-rylance/watchful-autoload-generator").default;

exports.default = function() {
	generator("/includes");
}
```

Where `includes` is the folder containing your PHP classes. Please note, I recommend putting your projects PHP classes in a subfolder of the project root, in order to avoid this tool scanning the vendor directory where present.
