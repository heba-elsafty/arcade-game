// Enemies our player must avoid
class Enemy {
	constructor() {
		// Variables applied to each of our instances go here,
		// we've provided one for you to get started
		// x position
		// y position
		// The image/sprite for our enemies, this uses
		// a helper we've provided to easily load images
		this.sprite = 'assets/images/enemy-bug.png';
	}
	// Update the enemy's positionition, required method for game
	// Parameter: dt, a time delta between ticks
	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
		// if Enemy isn't passed boundary
		// move forward
		// incressment X by speed * dt
		// else
		// Reset positionition to start
	}
	// Draw the enemy on the screen, required method for game
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player Class "Gamer"
class Gamer{
	// Constructor
	constructor(){
		// properties
		this.step = 101;
		this.jump = 85;
		this.startX = this.step * 2;
		this.startY = (this.jump * 5) - 30;
		this.x = this.startX;
		this.y = this.startY;
		
		this.sprite = 'assets/images/char-boy.png';
	}
	// Methods
	// Render
		// Draw Player sprite on current x and y coord positionition
		render(){
			ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		}
		
		// Update positionition
			// check collision here
				// Did Player x ,y collide  with Enemy  (yes ==> reset method)
			// check win here
				// Did Player x ,y reach final tile  (yes ==> reset method)
		update(){
			
		}
		
		// Handle keyboard Input
			// Update player's X and Y property according to input
		handleInput(input){
			switch(input){
				case "left":
					if(this.x > 0){
						this.x -= this.step;
					}
					break;
				case "up" :
					if (this.y >  0){
						this.y -= this.jump;
					}
					break;
				case "right" :
					if(this.x < this.step * 4){
						this.x += this.step;
					}
					break;
				case "down" : 
					if (this.y < (this.jump * 5) - 30){
						this.y += this.jump;
					}
					break;
			}
		}
			
		// Reset Player
			// set X and Y to starting X and Y
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

	// New player Object
	const player = new Gamer();
	// init allEnemies array
	const allEnemies = []
	// For each Enemy  create and push new Object into above array

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
		var allowedKeys = {
				37: 'left',
				38: 'up',
				39: 'right',
				40: 'down'
		};

		player.handleInput(allowedKeys[e.keyCode]);
});
