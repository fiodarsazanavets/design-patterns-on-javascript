class SoldierFlyweight {
    
    eliminate(soldierId) {
        console.log(`${this.soldierType} ${soldierId} has been eliminated.`);
    }

    constructor(soldierType,
        experienceLevel,
        speed,
        strength) {
        this.soldierType = soldierType;
        this.experienceLevel = experienceLevel;
        this.speed = speed;
        this.strength = strength;
    }
}

module.exports = SoldierFlyweight;