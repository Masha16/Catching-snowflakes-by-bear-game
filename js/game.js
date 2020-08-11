class Game {
    constructor() {
      this.canvas = document.getElementById("myCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.x = 0;
      this.y = 0;
      this.width = 650;
      this.height = 450;
      this.bear = new Bear(this, 200, 340, 80, 110);
    
    }
  
    init() {
      this.start();
    }

  
    start() {
      this.drawBear();
      setInterval(()=> {
          this.clear();
          this.drawBear();
          this.moveBear();
      }, 100 )
    }

  
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    drawBear() {
      this.bear.drawComponent("../img/bear.jpg");
    }

    moveBear () {
        this.bear.move()
    }
  }