const SoldierFlyweight = require('./soldierFlyweight.js');

class FlyweightFactory {
    #flyweights;

    getFlyweight(key) {
        return this.#flyweights[key];
    }

    constructor() {
        this.#flyweights = { };
        this.#flyweights['Militiaman'] = new SoldierFlyweight('Militiaman', 1, 1, 1);
        this.#flyweights['Soldier'] = new SoldierFlyweight('Soldier', 2, 1, 2);
        this.#flyweights['Knight'] = new SoldierFlyweight('Soldier', 10, 5, 5);
    }
}

module.exports = FlyweightFactory;