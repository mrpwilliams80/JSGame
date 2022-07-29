const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//#region - Simple Animation
/**
 * Draw a block in the canvas and move it horizontally from one edge till it is 
 * off the other
 */


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
/**
 * Draw an image from external asset to canvas, starting at position 0,0 without 
 * resizing the source
 */

// const SPRITE_SHEET = new Image();                       // create Image obj
// SPRITE_SHEET.src = "./Assets/shadow_dog.png";           // set Image src

// function drawSprite() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   // clear canvas
//     ctx.drawImage(SPRITE_SHEET, 0, 0);                  // draw sprite sheet

//     requestAnimationFrame(drawSprite);              // call func for nxt frame
// }

// drawSprite();                                           // start animation

//#endregion


//#region - Draw Image to Canvas Modify Size & Position
/**
 * Draw image from external asset to canvas, starting at position 50, 50 and 
 * resized to fit inside a margin of 50
 */

const SPRITE_SHEET = new Image();                       // create Image obj
SPRITE_SHEET.src = "./Assets/shadow_dog.png";           // set Image src

function drawSprite() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   // clear canvas
    
    // draw sprite sheet
    ctx.drawImage(SPRITE_SHEET, 50, 50, CANVAS_WIDTH-100, CANVAS_HEIGHT-100);
    requestAnimationFrame(drawSprite);              // call func for nxt frame
}

drawSprite();                                           // start animation

//#endregion