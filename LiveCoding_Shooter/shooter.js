//Logik für ein James Bond Shooter Game

const agent1 = {
    firstName: 'James',
    lastName: 'Bond',
    lives: 5,
    positionX: 200,
    positionY: 200,
    weapons: ['Berreta 9mm', 'AK-47', 'Granatenwerfer'],
    bullets: 10,
    actualWeaponIndex: 0,
    takeDamge: function (){
        this.lives--;
    },
    printAgent: function (){
        console.log(`Agent ${this.firstName} ${this.lastName} hat noch ${this.lives} Leben und steht auf Position X: ${this.positionX} und Y: ${this.positionY} | Bewaffnung: ${this.selectedWeapon()}| Munition: ${this.bullets}`);
    },
    walkForward(){
        this.positionY -= 5;
    },
    walkBackward(){
        this.positionY += 5;
    },
    walkLeft(){
        this.positionX -= 5;
    },
    walkRight(){
        this.positionX += 5;
    },
    selectedWeapon(){
        return this.weapons[this.actualWeaponIndex];
    },
    switchWeapon(){
        this.actualWeaponIndex++;
        this.actualWeaponIndex = this.actualWeaponIndex % this.weapons.length;
        // oder
        //if(this.actualWeaponIndex > this.weapons.length -1){
            //this.actualWeaponIndex = 0;
        //}
    },
    shoot(){
       this.bullets--;
    }
};

const agent2 = Object.create(agent1);
agent2.firstName = 'Natalya';



agent1.printAgent();
agent1.takeDamge();
agent1.printAgent();
agent1.shoot();
agent1.walkForward();
agent1.walkRight()
agent1.switchWeapon();
agent1.shoot();
agent1.printAgent();

agent2.printAgent();
agent2.takeDamge();
agent2.printAgent();
agent2.shoot();
agent2.walkForward();
agent2.walkRight()
agent2.switchWeapon();
agent2.shoot();
agent2.printAgent();