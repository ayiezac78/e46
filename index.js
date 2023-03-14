class StreetFighter{
  constructor(_name, _hp, _strength){
    this.name = _name;
    this.hp = _hp;
    this.strength = _strength;
  }
  attack(enemy){
    let damage=Math.floor((Math.random()*this.strength)+1);
    enemy.hp=enemy.hp-damage;
    return damage;
  }
  attackInfo(enemy){
   return console.log(`${this.name} attacks ${enemy.name} and does damage of ${this.attack(enemy)}! ${this.name} health: ${this.hp}. ${enemy.name}. ${enemy.hp}`);
  }
}
const fighter1 = new StreetFighter('Fighter1', 100, 17);
const fighter2 = new StreetFighter('Fighter2', 150, 10);
for(let i=1; i<=10; i++){
  console.log(`===Round `, i , "===" );
  fighter1.attackInfo(fighter2);
  fighter2.attackInfo(fighter1);
}
(fighter1.hp > fighter2.hp) ? console.log(`${fighter1.name} WINS!!!`) : console.log(`${fighter2.name} WINS!!`);
if(fighter1.hp === fighter2.hp && fighter2.hp === fighter1.hp) console.log("It's a tie!");