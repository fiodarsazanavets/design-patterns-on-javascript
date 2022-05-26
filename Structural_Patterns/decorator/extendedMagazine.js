const GunDecorator = require("./gunDecorator.js");

class ExtendedMagazine extends GunDecorator {

    #extraAmmo = 0;

    reload() {
        super.reload();
        this.#extraAmmo = 6;
    }

    shoot() {
        if (!super.shoot()) {
            if (this.#extraAmmo > 0) {
                console.log('Shot fired from the extended magazine.');
                this.#extraAmmo--;
                return true;
            }

            return false;
        }

        return true;
    }
}

module.exports = ExtendedMagazine;