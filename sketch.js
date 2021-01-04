var dog,happyDog,foodS,foodStock,dogImg

function preload()
{
	dogImg = loadImage("dogImg");
}

function setup() {
  createCanvas(500, 500);
  
  database= firebase.database();
 
  dog = createSprites(300,200,10,10)
  dog.addImage(dogImag);

  foodStock = database.ref('Food')
  foodStock.on("value",readStock);

  
}


function draw() {  

  background(46, 139, 87);;
  
  if(kyeWentDown(UP_ARROW)){

    writeStock(foodS)
    dog.addImage(happyDog);
  }
  drawSprites()

  textSize(20)

  fill("red")
  
  text("Press up arrow key to feed drago milk",100,100);

}

function readStock(data){

  foodS = data.val()
}

function writeSock(x){

  database.ref('/').update({
   Food:x
  })
}



