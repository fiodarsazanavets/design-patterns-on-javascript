const GunInterface = require('./gunInterface.js');

class GunDecorator extends GunInterface {
    
    #gun;

    setGun(gun)
    {
        this.#gun = gun;
    }

    reload()
    {
        if (this.#gun) {
            this.#gun.reload();
        }
    }

    shoot() {
        if (this.#gun) {
            return this.#gun.shoot();
        }

        return false;
    }
}

module.exports = GunDecorator;