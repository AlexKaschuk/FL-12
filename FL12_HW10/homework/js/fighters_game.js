class Fighter {
    constructor({ name, damage, hp, strength, agility }) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._strength = strength;
        this._agility = agility;
        this._startHp = hp;
        this.wins = 0;
        this.loss = 0;
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    getHealth() {
        return this._hp;
    }
    attack(defendFighter) {
        let atata = defendFighter.getStrength() + defendFighter.getAgility();
        const MAX_CHANCE = 100;
        if (Math.floor(Math.random() * MAX_CHANCE > atata)) {
            console.log(
                `${this._name} makes ${defendFighter.getName()}` +
                ` ${this._damage} damage`
            );
            defendFighter.dealDamage(this._damage);
        } else {
            console.log(`${this._name} atack missed`);
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this.wins}, Loses: ${this.loss}`);
    }
    heal(heals) {
        if (this._hp > this._startHp - heals) {
            this._hp = this._startHp;
        } else {
            this._hp += heals;
        }
    }
    dealDamage(makedDamage) {
        if (this._hp <= makedDamage) {
            this._hp = 0;
        } else {
            this._hp = this._hp - makedDamage;
        }
    }
    addWin() {
        this.wins++;
    }
    addLoss() {
        this.loss++;
    }
}

function battle(myFighter, myFighter1) {
    if (myFighter.getHealth() > 0 && myFighter1.getHealth() > 0) {
        myFighter.attack(myFighter1);
        if (myFighter1.getHealth() > 0) {
            myFighter1.attack(myFighter);
            battle(myFighter, myFighter1);
        } else {
            myFighter1._hp = 0;
            console.log(`${myFighter.getName()} has won`);
            myFighter1.addLoss();
            myFighter.addWin();
        }
    } else if (myFighter.getHealth() <= 0) {
        myFighter._hp = 0;
        console.log(`${myFighter1.getName()} has won`);
        myFighter.addLoss();
        myFighter1.addWin();
    }
}

const myFighter = new Fighter({
    name: 'Maximus',
    damage: 45,
    hp: 100,
    strength: 30,
    agility: 25
});
const myFighter1 = new Fighter({
    name: 'Comodus',
    damage: 25,
    hp: 90,
    strength: 25,
    agility: 20
});