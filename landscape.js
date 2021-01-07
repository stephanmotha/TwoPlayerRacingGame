var playerOneLaps = 0
var playerTwoLaps = 0

function InnerPart(x, y, w, h){
  this.x = x
  this.y = y
  this.width = w
  this.height = h
  this.colour = color(0, 255, 0)

  this.draw = function(){
    noStroke()
    fill(this.colour)
    rect(this.x, this.y, this.width, this.height)
    }
  this.boundaryDetectionOne = function(PlayerOne){
    if (playerOne.x+playerOne.width > width){
      playerOne.x = width - playerOne.width
    }else if (playerOne.x < 0){
      playerOne.x = 0
    }else if (playerOne.y < 0){
      playerOne.y = 0
    }else if (playerOne.y+playerOne.height > height){
      playerOne.y = height - playerOne.height
    }
     else if(playerOne.x+ playerOne.width > this.x && playerOne.x< this.x+ this.width && playerOne.y< this.y +this.height  && playerOne.y + playerOne.height> this.y){
      playerOne.x = 105
      playerOne.y = 550

    }





  }
  this.boundaryDetectionTwo = function(PlayerTwo){
    if (playerTwo.x+playerTwo.width > width){
      playerTwo.x = width - playerTwo.width
    }else if (playerTwo.x < 0){
      playerTwo.x = 0
    }else if (playerTwo.y < 0){
      playerTwo.y = 0
    }else if (playerTwo.y+playerTwo.height > height){
      playerTwo.y = height - playerTwo.height
    }
     else if(playerTwo.x+ playerTwo.width > this.x && playerTwo.x< this.x+ this.width && playerTwo.y< this.y +this.height  && playerTwo.y + playerTwo.height> this.y){
      playerTwo.x = 105
      playerTwo.y = 550
}
}
}

function EndingLine(x1, x2, y1, y2){
  this.x1 = x1
  this.y1 = y1
  this.x2 = x2
  this.y2 = y2

  this.draw = function(){
    strokeWeight(3)
    stroke(color(random(0,255),random(0,255),random(0,255)))
    line(this.x1, this.y1, this.x2, this.y2)
  }
  this.detectLaps = function(PlayerOne, PlayerTwo){
    if (playerOne.y >= 500 && playerOne.x == 100 && keyIsDown(RIGHT_ARROW)){
      playerOneLaps+=1
      console.log(playerOneLaps)
    }
    if (playerTwo.y >= 500 && playerTwo.x == 100 && playerTwo.dir == 1){
      playerTwoLaps+=1
      console.log(playerTwoLaps)
    }

}
  this.detectCheating = function(PlayerOne, PlayerTwo){
    if(playerOne.dir == -1 && playerOne.x==this.x1 && playerOne.y> this.y1){
      playerOne.x = 105
    }
    if(playerTwo.dir == -1 && playerTwo.x==this.x1 && playerTwo.y> this.y1){
      playerTwo.x = 105
    }
  }
}



    /*
    if (playerOne.x+playerOne.width > width){
      playerOne.x = width - playerOne.width
    }else if (playerOne.x < 0){
      playerOne.x = 0
    }else if (playerOne.y < 0){
      playerOne.y = 0
    }else if (playerOne.y+playerOne.height > height){
      playerOne.y = height - playerOne.height
    }//else if (playerOne.x+playerOne.width > this.x && playerOne.y + playerOne.height > this.y && playerOne.y < this.y+this.height){
      //playerOne.x = this.x - playerOne.width
    //}
    if(playerOne.x + playerOne.width < this.x){
      if (playerOne.x > this.x +this.width && playerOne.y> this.y && playerOne.y < this.y +this.height){
        playerOne.x = this.x - playerOne.width
    //else if (playerOne.x> this.x+this.width){

    }

    }

    }
      //playerOne.x = width - playerOne.width
    //}
}
*/
