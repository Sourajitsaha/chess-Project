var flag = true;

var P1, OP1;

function setup() {
  createCanvas(850,850);

  var b1 = createSprite(425, 12.5, 850, 25);
  b1.shapeColor = "brown";

  var b2=createSprite(837.5,425,25,850);
  b2.shapeColor="brown";

  var b3=createSprite(12.5,425,25,850);
  b3.shapeColor="brown";

  var b4=createSprite(425,837.5,850,25);
  b4.shapeColor="brown";

  for (let x = 75; x < 800; x = x+100) {
    // for 8 rows
    for(var y = 75; y < 800; y=y+100){

      //creating the 8 columns
      var block = createSprite(x, y, 100, 100);
      if(flag){
        block.shapeColor = "black";
        flag = false;

      } else {
        block.shapeColor = "white";
        flag = true;

      }

    }

    if(flag){
      flag = false;
    } else {
      flag = true;
    }
    
  }
  //createSprite(400, 200, 50, 50);

  P1 = new GPawn("white", 0);
  OP1 = new GPawn("black", 0);
}

function draw() {
  background(255,255,255); 

  P1.display();
  OP1.display();

  drawSprites();
}