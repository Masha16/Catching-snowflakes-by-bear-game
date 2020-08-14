class Snow {
  constructor(game, canvasWidth, canvasHeight) {
    this.game = game;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.flakes = [];
  }

  addFlake() {
    let flakePositionX = Math.floor(Math.random() * this.canvasWidth) + 3;
    let flakePositionY = 0;
    let flakeSpeed = Math.floor(Math.random() * 1) + 20;

    this.flakes.push({
      x: flakePositionX,
      y: flakePositionY,
      speed: flakeSpeed,
    });
  }
  

}