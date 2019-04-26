// Enemies our player must avoid
var Enemy = function(x,y,speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	
	// x position
	// y position
		this.startY = 55;
		this.step = 101;
		this.speed = speed;
		this.boundary = this.step * 5;
		this.resetPosition = -this.step;
		this.x = x;
		this.y = y + this.startY;

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'assets/images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	
	// if Enemy isn't passed boundary
		// move forward
		// incressment X by speed * dt
		// else
		// Reset positionition to start
		if(this.x < this.boundary){
			// move forward
			// increment x speed * dt
			this.x += this.speed * dt;
		} else{
			this.x = this.resetPosition ;
		}
		
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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
		this.startY = (this.jump * 4) + 55;
		this.x = this.startX;
		this.y = this.startY;
		this.victory = false;
		this.sprite = 'assets/images/char-boy.png';
	}
	// Methods
	// Render
		// Draw Player sprite on current x and y coord positionition
		render(){
			ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		}
		
		// Update positionition
		update(){
		// check collision here
			// Did Player x ,y collide  with Enemy  (yes ==> reset method)
			for(let enemy of allEnemies){
				if(this.y === enemy.y && (enemy.x + enemy.step / 2 > this.x && enemy.x < this.x + this.step / 2 )){
					this.reset();
				}
			}
			// check win here
				// Did Player x ,y reach final tile  (yes ==> reset method)
				if (this.y === 55 ){
					this.victory = true;
				}
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
					if (this.y < (this.jump * 4) + 55){
						this.y += this.jump;
					}
					break;
			}
		}
			
		// Reset Player
			// set X and Y to starting X and Y
		reset(){
			this.x = this.startX;
			this.y = this.startY;
		}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

	// New player Object
	const player = new Gamer();
	// init allEnemies array
	const bug1 = new Enemy(-101 , 0 ,300);
	const bug2 = new Enemy(101 , 85 , 250);
	const bug3 = new Enemy((-101 * 2.5) , 85, 250);
	const bug4 = new Enemy(-101 , (85 * 2), 200);
	const bug5 = new Enemy((-101 * 5) , (85 * 2), 200);
	const allEnemies = [];
	allEnemies.push(bug1,bug2,bug3,bug4,bug5);
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
