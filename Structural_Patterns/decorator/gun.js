const GunInterface = require("./gunInterface.js");

class Gun extends GunInterface {

    #ammo = 0;

    reload() {
        this.#ammo = 6;
    }

    shoot() {
        
        if (this.#ammo > 0) {
            console.log('Shot fired.');
            this.#ammo--;
            return true;
        }

        console.log('Out of ammo.');
        return false;
    }
}

module.exports = Gun;