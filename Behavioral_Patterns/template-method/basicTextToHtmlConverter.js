const AbstractTextToHtmlConverter = require('./abstractTextToHtmlConverter.js');

class BasicTextToHtmlConverter extends AbstractTextToHtmlConverter {
    
    applyPostProcessing(text) {
        return text;
    }
}

module.exports = BasicTextToHtmlConverter;