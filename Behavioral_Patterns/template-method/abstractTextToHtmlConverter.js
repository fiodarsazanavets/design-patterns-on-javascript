class AbstractTextToHtmlConverter {
    processParagraphs(text) {

        var paragraphs = text.split(/[\r\n\?|\n]/);
        
        var textToWrite = '';
    
        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i])
                textToWrite += `<p>${paragraphs[i]}</p>\n`;
        }

        return textToWrite += '<br/>';
    }

    applyPostProcessing(text) {

    }

    convertText(text) {
        text = this.processParagraphs(text);
        return this.applyPostProcessing(text);
    }
}

module.exports = AbstractTextToHtmlConverter;