const Component = require('./component.js');

class HtmlToTextConverter extends Component {

    accept(visitor, text) {
        return visitor.visitHtmlToTextConverter(this, text);
    }

    processParagraphs(text) {
        return text
            .replace(/<p>/g, '')
            .replace(/<\/p>/g, '\n')
            .replace(/<br\/>/g, '');
    }
}

module.exports = HtmlToTextConverter;