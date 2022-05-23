const NewLineHelper = require('./newLineHelper.js');
const PathSeparatorHelper = require('./pathSeparatorHelper.js');

class NewLineHelperFactory {

    createNewLineHelper() {
        return new NewLineHelper();
    }

    createPathSeparatorHelper() {
        return new PathSeparatorHelper();
    }
}

module.exports = NewLineHelperFactory;