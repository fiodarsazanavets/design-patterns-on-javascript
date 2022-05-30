const State = require('./state.js');

class UnlockedScreenState extends State {
    pressHomeButton() {
        console.log('Home screen has been opened.');
    }
}

module.exports = UnlockedScreenState;