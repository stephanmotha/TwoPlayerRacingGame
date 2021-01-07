

function BottomObstacles(){
  this.gap = random(0, 75)

  this.bottom = random(570, 600)
//rectangle1
  this.x1 = width
  this.y1 = 500
  this.x2 = 20
  this.y2 = random(505, 540)
  this.xSpeed = 5
  //rectangle2
  this.y2Two = 600
  this.y1One = this.y2 +50

  this.colour = color(random(255), random(255), random(255))

  this.draw = function(){
    stroke(0)
    fill(this.colour)
    //rect(this.x, 300, 200, 100)
    line(this.x1, this.y1, this.x1 , this.y2 )
    line(this.x1, this.y1One , this.x1, this.y2Two)
    }
  this.move = function(){
    this.x1 -= this.xSpeed
}
  this.collisionDetection = function(playerOne, playerTwo){
    if(playerOne.y+playerOne.height> 500 &&  this.x1< playerOne.x +playerOne.width && this.x1 > playerOne.x && this.y2> playerOne.y){
      playerOne.x = 105
    }else if (playerOne.y+playerOne.height>500 && this.x1< playerOne.x + playerOne.width && this.x1 > playerOne.x && this.y1One< playerOne.y + playerOne.height ){
      playerOne.x = 105
    }
    if(playerTwo.y+playerTwo.height> 500 &&  this.x1< playerTwo.x +playerTwo.width && this.x1 > playerTwo.x && this.y2> playerTwo.y){
      playerTwo.x = 105
    }else if (playerTwo.y+playerTwo.height>500 && this.x1< playerTwo.x + playerTwo.width && this.x1 > playerTwo.x && this.y1One< playerTwo.y + playerTwo.height ){
      playerTwo.x = 105
    }
      }
    }
function TopObstacles(){
  this.gap = random(0, 75)

  this.bottom = random(570, 600)
  //rectangle1
  this.x1 = 0-1
  this.y1 = 0
  this.x2 = 20
  this.y2 = random(0, 40)
  this.xSpeed = 5
  //rectangle2
  this.y2Two = 99
  this.y1One = this.y2+50

  this.colour = color(random(255), random(255), random(255))

  this.draw = function(){
    stroke(0)
    fill(this.colour)
        //rect(this.x, 300, 200, 100)
    line(this.x1, this.y1, this.x1 , this.y2 )
    line(this.x1, this.y1One , this.x1, this.y2Two)
        }
  this.move = function(){
    this.x1 += this.xSpeed
    }
  this.collisionDetection = function(playerOne, playerTwo){
    if(playerOne.y+playerOne.height<100 &&  this.x1> playerOne.x  && this.x1 < playerOne.x +playerOne.width && this.y2> playerOne.y){
      playerOne.x = 105
      playerOne.y = 505

    }else if (playerOne.y+playerOne.height<100 && this.x1> playerOne.x && this.x1 < playerOne.x + playerOne.width && this.y1One< playerOne.y + playerOne.height ){
      playerOne.x = 105
      playerOne.y = 505
    }
    if(playerTwo.y+playerTwo.height<100 &&  this.x1> playerTwo.x  && this.x1 < playerTwo.x +playerTwo.width && this.y2> playerTwo.y){
      playerTwo.x = 105
      playerTwo.y = 505

    }else if (playerTwo.y+playerTwo.height<100 && this.x1> playerTwo.x && this.x1 < playerTwo.x + playerTwo.width && this.y1One< playerTwo.y + playerTwo.height ){
      playerTwo.x = 105
      playerTwo.y = 505
    }
        }
      }
