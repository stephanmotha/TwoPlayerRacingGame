var myFrameRate = 60
var timeIncrement = 1 / myFrameRate
var currentTime = 0
var playerOne
var innerpart
var playerTwo
var endingLine
var startingScreen = false
var bottomObstacles
bO = []
bU = []
function setup(){
  createCanvas(800, 600)
  playerOne = new PlayerOne(105, 530 , 25, 25)
  playerTwo = new PlayerTwo(105, 570, 25, 25)
  innerPart = new InnerPart(100, 100, width-200, height-200)
  endingLine = new EndingLine(100, 100, 500, height)

}
function drawTop(){
  for(i=0; i<bU.length;i++){
    bU[i].draw()
    //console.log("draw")
    bU[i].collisionDetection(playerOne, playerTwo)
    bU[i].move()
    if (bU[i].x1>800){
      bU.shift()
    }

}
}
function drawBottom(){
  for(i=0; i<bO.length;i++){
    bO[i].draw()
    //console.log("draw")
    bO[i].collisionDetection(playerOne, playerTwo)
    bO[i].move()
    if (bO[i].x1<0){
      bO.shift()
      console.log("pop")
    }
  }
}


function draw(){
  frameRate(myFrameRate)
  currentTime += timeIncrement
  if (frameCount % (1 * myFrameRate) == 0) {
    bO.push(new BottomObstacles())
  }
  if (frameCount % (1 * myFrameRate) == 0) {
    bU.push(new TopObstacles())
  }
  background(200)
  playerOne.draw()
  innerPart.draw()
  playerOne.update()
  innerPart.boundaryDetectionOne(PlayerOne)
  innerPart.boundaryDetectionTwo(PlayerTwo)
  playerTwo.draw()
  playerTwo.update()
  endingLine.draw()
  endingLine.detectCheating()
  endingLine.detectLaps()
  drawBottom()
  drawTop()

  //BottomObstacles.draw()

  if (playerOneLaps>=1){
    
    textSize(50)
    fill(0, 0, 255)
    text("Player One Wins", width/2-175, height/2)
  }
  if (playerTwoLaps>=1){

    textSize(50)
    stroke(50)
    fill(255, 0, 0)
    text("Player Two Wins", width/2-175, height/2)
}

}
