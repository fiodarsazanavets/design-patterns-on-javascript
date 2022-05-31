const Visitor = require('./visitor.js');

class MdConverterVisitor extends Visitor {

    visitTextToHtmlConverter(component, text)
    {
        text = component.processParagraphs(text);

        var tagsToReplace = {
            '**': {
                opening: '<strong>',
                closing: '</strong>' 
            },
            '*': {
                opening: '<em>',
                closing: '</em>' 
            },
            '~~': {
                opening: '<del>',
                closing: '</del>' 
            }
        };

        for (const [key, value] of Object.entries(tagsToReplace)) {

            if (this.countStringOccurrences(text, key) % 2 == 0)
                text = this.applyTagReplacement(text, key, value.opening, value.closing);
        }

        return text;
    }

    visitHtmlToTextConverter(component, text) {
        return component.processParagraphs(text)
            .replace(/<strong>/g, '**')
            .replace(/<\/strong>/g, '**')
            .replace(/<em>/g, '*')
            .replace(/<\/em>/g, '*')
            .replace(/<del>/g, '~~')
            .replace(/<\/del>/g, '~~');
    }

    countStringOccurrences(text, pattern) {
        var count = 0;
        var currentIndex = 0;

        while ((currentIndex = text.indexOf(pattern, currentIndex)) != -1) {
            currentIndex += pattern.length;
            count++;
        }

        return count;
    }

    applyTagReplacement(text, inputTag, openingTag, closingTag)
    {
        var count = 0;
        var currentIndex = 0;

        while ((currentIndex = text.indexOf(inputTag, currentIndex)) != -1) {
            count++;
            var replacement = count % 2 != 0 ? openingTag : closingTag;
            text = text.replace(inputTag, replacement);
        }
        
        return text;
    }
}

module.exports = MdConverterVisitor;