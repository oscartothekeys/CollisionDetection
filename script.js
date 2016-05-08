/*

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/


var puck_x = 210;
var puck_y = 210;
var speed = 10;

document.getElementById("puck").style.top = puck_y + 'px';
document.getElementById("puck").style.left = puck_x + 'px';
document.getElementById("arena").style.borderStyle = "solid";


function logCoordinates() {
    console.log("x:"+puck_x + " y:"+puck_y);
}

function checkCollision() {
    if (puck_x > 250 && puck_x < 350 && puck_y > 150 && puck_y < 250 ) {
      document.getElementById("gap").style.backgroundColor = "red";
      console.log ("collision detected")
    }
    
    else {
        document.getElementById("gap").style.backgroundColor = "white";
        console.log ("no collision")
    }
}

function borderControl() {
    if (puck_x > 600 || puck_x < 0 || puck_y > 400 || puck_y < 0 ) {
        speed = 0 +'px' ;
        console.log("out of bounds")
    }
    
    else {
        var speed = 50;
        console.log ("in boundary")
    }
}

function itemCollisionBig() {
    if (puck_x > 90 && puck_x < 140 && puck_y > 90 && puck_y < 140 ) {
        console.log("item collision")
        document.getElementById("puck").style.height = '50px'
         document.getElementById("puck").style.width = '50px'
    }
    
}

function itemCollisionSmall() {
    if (puck_x > 290 && puck_x < 360 && puck_y > 290 && puck_y < 360 ) {
        console.log("item collision")
        document.getElementById("puck").style.height = '10px'
         document.getElementById("puck").style.width = '10px'
    }
    
}
    


document.getElementById("right").addEventListener("click", function(){
    puck_x += speed;
    document.getElementById("puck").style.left = puck_x + 'px';
    logCoordinates()
    checkCollision()
    borderControl()
    itemCollisionBig()
    itemCollisionSmall()
});

document.getElementById("left").addEventListener("click", function(){
    puck_x -= speed;
    document.getElementById("puck").style.left = puck_x + 'px';
    logCoordinates()
    checkCollision()
    borderControl()
    itemCollisionBig()
    itemCollisionSmall()
});

document.getElementById("up").addEventListener("click", function(){
    puck_y -= speed;
    document.getElementById("puck").style.top = puck_y + 'px';
    logCoordinates()
    checkCollision()
    borderControl()
    itemCollisionBig()
    itemCollisionSmall()
});

document.getElementById("down").addEventListener("click", function(){
    puck_y += speed;
    document.getElementById("puck").style.top = puck_y + 'px';
    logCoordinates()
    checkCollision()
    borderControl()
    itemCollisionBig()
    itemCollisionSmall()
});


