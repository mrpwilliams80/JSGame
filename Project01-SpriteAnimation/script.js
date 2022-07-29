const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//#region - Simple Animation
// A block moves horizontally from one edge of the canvas and off the other

// let x = 0;      // starting position

// function animateBlock(){
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   // clear canvas
//     ctx.fillStyle = "#888";                             // set to grey
//     ctx.fillRect(x, 50, 100, 100);                      // draw block

//     x++;                                                // inc h position
     
//     requestAnimationFrame(animateBlock)             // call func for nxt frame
// }

// animateBlock();                                         // start animation

//#endregion


//#region - Draw Image to Canvas No Modifications
// draw image from external asset to canvas at position 0,0 without resize

const SPRITE_SHEET = new Image();                       // create Image obj
SPRITE_SHEET.src = "./Assets/shadow_dog.png";           // set Image src

function drawSprite() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   // clear canvas
    ctx.drawImage(SPRITE_SHEET, 0, 0);                  // draw sprite sheet

    requestAnimationFrame(drawSprite);              // call func for nxt frame
}

drawSprite();                                           // start animation

//#endregion