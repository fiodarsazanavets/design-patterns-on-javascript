const PathSeparatorHelper = require('./pathSeparatorHelper.js');

class WindowsPathSeparatorHelper extends PathSeparatorHelper {

    getPathSeparator() {
        return '\\';
    }
}

module.exports = WindowsPathSeparatorHelper;