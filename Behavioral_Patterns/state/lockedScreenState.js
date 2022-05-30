const State = require('./state.js');

class LockedScreenState extends State {
    pressHomeButton() {
        console.log('Please enter screen unlock PIN.');
    }
}

module.exports = LockedScreenState;