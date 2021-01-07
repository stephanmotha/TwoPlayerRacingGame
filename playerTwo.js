
function PlayerTwo(x, y, w, h){
  this.x = x
  this.y = y
  this.width = w
  this.height = h
  this.speedX = 5
  this.speedY = 5
  this.colour = color(255, 0, 0)
  this.acc = false
  this.dir = 1

  this.draw = function(){
    fill(this.colour)
    strokeWeight(3)
    stroke(color(random(0,255),random(0,255),random(0,255)))
    rect(this.x, this.y, this.width, this.height)
  }

  this.update = function(){
    if(keyIsDown(68)){
      this.x += this.speedX
      this.acc = true
      this.dir = 1
    }
    if(keyIsDown(87)){
      this.y -= this.speedY
      this.acc = true
    }
    if(keyIsDown(83)){
      this.y += this.speedY
      this.acc = true
    }
    if(keyIsDown(65)){
      this.x -= this.speedX
      this.acc = true
      this.dir = -1
   }else{
     (this.acc = false)
     //this.dir = 0
   }
}
}
