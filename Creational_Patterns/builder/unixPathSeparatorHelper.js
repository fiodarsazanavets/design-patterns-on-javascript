const PathSeparatorHelper = require('./pathSeparatorHelper.js');

class UnixPathSeparatorHelper extends PathSeparatorHelper {

    getPathSeparator() {
        return '\\';
    }
}

module.exports = UnixPathSeparatorHelper;