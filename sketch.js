var canvas, backgroundImage;

var gameState = 0;


var form, player, game;

var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25;

var qCheck = 0;
var score = 0;
var bi, b


function preload(){
  bi = loadImage("images/c2.jpg")
}

function setup(){
  database = firebase.database();
  b = createSprite(200,0,displayWidth - 20, displayHeight-30)
  b.addImage(bi)
  b.scale = 2
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  game = new Game();
  game.start();


//  var qCheckC = database.ref('ball/position'); 
  //qCheckC.on("value", readPosition, showError);

}


function draw(){
 //background.addImage(bi);
//console.log(canvas.height);
//console.log("1 = " + q1);
//console.log("2 = " + q2);
//console.log("3 = " + q3);
//console.log("4 = " + q1);
//console.log("5 = " + q1);
//console.log("6 = " + q1);
//console.log("7 = " + q1);
//console.log("8 = " + q1);
//console.log("9 = " + q1);
//console.log("10 = " + q1);
//console.log("11 = " + q1);
//console.log("12 = " + q1);
//console.log("13 = " + q1);
//console.log("14 = " + q1);
//console.log("15 = " + q1);
//console.log("16 = " + q1);
//console.log("17 = " + q1);
//console.log("18 = " + q1);
//console.log("19 = " + q1);
//console.log("20 = " + q1);
//console.log("21 = " + q1);
//console.log("22 = " + q1);
//console.log("23 = " + q1);
//console.log("24 = " + q1);
//console.log("25 = " + q1);
//console.log(qCheck);



drawSprites();

console.log(score);



}
