const GunDecorator = require("./gunDecorator.js");

class Silencer extends GunDecorator {

    shoot()
    {
        if (super.shoot()) {
            console.log('Shot has been silenced.');
            return true;
        }

        return false;
    }
}

module.exports = Silencer;