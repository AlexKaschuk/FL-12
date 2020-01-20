function Fighter(parameters) {
    let _name = parameters.name;
    let _damage = parameters.damage;
    let _hp = parameters.hp;
    let _strength = parameters.strength;
    let _agility = parameters.agility;
    let _startHp = parameters.hp;
    let _wins = 0;
    let _loss = 0;

    return new class _Fighter {
        getName() {
            return _name;
        }
        getDamage() {
            return _damage;
        }
        getStrength() {
            return _strength;
        }
        getAgility() {
            return _agility;
        }
        getHealth() {
            return _hp;
        }
        attack(defendFighter) {
            const atata = defendFighter.getStrength() + defendFighter.getAgility();
            const MAX_CHANCE = 100;
            if (Math.random() * MAX_CHANCE > atata) {
                console.log(
                    `${_name} makes ${defendFighter.getName()}` + ` ${_damage} damage`
                );
                defendFighter.dealDamage(_damage);
            } else {
                console.log(`${_name} atack missed`);
            }
        }
        logCombatHistory() {
            console.log(`Name: ${_name}, Wins: ${_wins}, Loses: ${_loss}`);
        }
        heal(heals) {
            if (_hp > _startHp - heals) {
                _hp = _startHp;
            } else {
                _hp += heals;
            }
        }
        dealDamage(makedDamage) {
            if (_hp <= makedDamage) {
                _hp = 0;
            } else {
                _hp = _hp - makedDamage;
            }
        }
        addWin() {
            _wins++;
        }
        addLoss() {
            _loss++;
        }
    }();
}

function battle(myFighter, myFighter1) {
    if (!myFighter.getHealth()) {
        console.log(`${myFighter.getName()} is dead and can't fight`);
    } else if (!myFighter1.getHealth()) {
        console.log(`${myFighter1.getName()} is dead and can't fight`);
    } else {
        while (myFighter.getHealth() && myFighter1.getHealth()) {
            myFighter.attack(myFighter1);
            if (myFighter1.getHealth()) {
                myFighter1.attack(myFighter);
            }
        }
        if (myFighter.getHealth()) {
            console.log(`${myFighter.getName()} has won`);
            myFighter1.addLoss();
            myFighter.addWin();
        } else {
            console.log(`${myFighter1.getName()} has won`);
            myFighter.addLoss();
            myFighter1.addWin();
        }
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