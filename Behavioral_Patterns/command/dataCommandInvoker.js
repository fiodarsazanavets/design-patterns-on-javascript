class DataCommandInvoker {
    #command;

    setCommand(command) {
        this.#command = command;
        console.log(`Command ${command.constructor.name} set.`);
    }

    executeCommand() {
        this.#command.execute();
    }
}

module.exports = DataCommandInvoker;