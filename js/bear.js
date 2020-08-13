class Bear extends Component {
    constructor(game, x, y, w, h) {
      super(game, x, y, w, h);
    }
    
    move() {
        document.onkeydown = (event) => {
          console.log("pressing");
          const key = event.keyCode;
          const possibleKeystrokes = [37, 39];
          if (possibleKeystrokes.includes(key)) {
            event.preventDefault();
            switch (key) {
              case 37:
                this.x -= 20;
                this.game.clear()
                break;
              case 39:
                this.x += 20;
                break;
              
            }
          }
        };
      }

}
