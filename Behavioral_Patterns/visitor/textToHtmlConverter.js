const Component = require('./component.js');

class TextToHtmlConverter extends Component {

    accept(visitor, text) {
        return visitor.visitTextToHtmlConverter(this, text);
    }

    processParagraphs(text) {
        var paragraphs = text.split(/[\r\n\?|\n]/);     
        var textToWrite = '';
    
        for (var i = 0; i < paragraphs.length; i++) {
            if (paragraphs[i])
                textToWrite += `<p>${paragraphs[i]}</p>\n`;
        }

        return textToWrite += '<br/>';
    }
}

module.exports = TextToHtmlConverter;