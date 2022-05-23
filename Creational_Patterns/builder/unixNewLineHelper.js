const NewLineHelper = require('./newLineHelper.js');

class UnixNewLineHelper extends NewLineHelper {

    getNewLine() {
        return '\n';
    }
}

module.exports = UnixNewLineHelper;