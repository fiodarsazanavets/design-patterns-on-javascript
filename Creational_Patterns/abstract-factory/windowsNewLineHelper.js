const NewLineHelper = require('./newLineHelper.js');

class WindowsNewLineHelper extends NewLineHelper {

    getNewLine() {
        return '\r\n';
    }
}

module.exports = WindowsNewLineHelper;