const LockedScreenState = require('./lockedScreenState.js');

class MobilePhoneContext {
    
    #state = new LockedScreenState();

    changeState(state) {
        this.#state = state;
    }

    pressHomeButton() {
        this.#state.pressHomeButton();
    }
}

module.exports = MobilePhoneContext;