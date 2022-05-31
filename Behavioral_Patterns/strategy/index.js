const PathSeparatorContext = require('./pathSeparatorContext.js');
const UnixPathSeparatorStrategy = require('./unixPathSeparatorStrategy.js');
const WindowsPathSeparatorStrategy = require('./windowsPathSeparatorStrategy.js');

var context = new PathSeparatorContext();

var strategy = process.platform == 'win32' ? 
    new WindowsPathSeparatorStrategy() :
    new UnixPathSeparatorStrategy();

context.setStrategy(strategy);

console.log('The path separator is .' + context.getPathSeparator());