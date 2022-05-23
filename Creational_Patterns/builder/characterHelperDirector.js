class CharacterHelperDirector {

    buildHelper(builder) {
        builder.addNewLineHelper();
        builder.addPathSeparatorHelper();
        return builder.build();
    }
}

module.exports = CharacterHelperDirector;