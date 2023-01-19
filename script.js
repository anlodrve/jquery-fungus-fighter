$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let attackPoints=100; 

function onReady() {

    //when you click the arcane-sceptre
    $('.attack-btn.arcane-sceptre').on('click', arcaneSceptreAttack);

    //when you click the entangle
    $('.attack-btn.entangle').on('click', entangleAttack);
    //when you click the dragon blade
    $('.attack-btn.dragon-blade').on('click', dragonBladeAttack);

    //when you click the star-fire
    $('.attack-btn.star-fire').on('click', starFireAttack);

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function arcaneSceptreAttack () {
    //change the state of points
    attackPoints -=12
    fungusHP -= 14
    console.log(attackPoints, fungusHP);
    if(attackPoints<=0){
        attackPoints = 0;
    }
    if(fungusHP<= 0){
        fungusHP = 0
    }
    render();
}

function entangleAttack () {
    attackPoints -=23
    fungusHP -= 9
    console.log(attackPoints, fungusHP);
    if(attackPoints<=0){
        attackPoints = 0;
    }
    if(fungusHP<= 0){
        fungusHP = 0
    }
    render();

}

function dragonBladeAttack () {
    attackPoints -=38
    fungusHP -= 47
    console.log(attackPoints, fungusHP);
    if(attackPoints<=0){
        attackPoints = 0;
    }
    if(fungusHP<= 0){
        fungusHP = 0
    }
    render();

}

function starFireAttack () {
    attackPoints -=33
    fungusHP -= 25
    if(attackPoints<=0){
        attackPoints = 0;
    }
    if(fungusHP<= 0){
        fungusHP = 0
    }
    render();
    console.log(attackPoints, fungusHP);
}
//Need conditional to keep the points from becoming less than zero 

function render(){
    //makes things happen on the DOM 
    $('.hp-text').text(fungusHP);
    $('.ap-text').text(attackPoints);
}

