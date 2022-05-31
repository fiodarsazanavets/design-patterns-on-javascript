class PathSeparatorContext {
    #strategy = null;

    setStrategy(strategy) {
        this.#strategy = strategy;
    }

    getPathSeparator() {
        return this.#strategy.getPathSeparator();
    }
}

module.exports = PathSeparatorContext;