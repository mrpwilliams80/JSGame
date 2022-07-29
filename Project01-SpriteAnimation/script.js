const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//#region - Simple Animation
/*
 * Draw a block in the canvas and move it horizontally from one edge till it is 
 * off the other
 */

let x = 0;                                              // starting position

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
/*
 * Draw an image from external asset to canvas, starting at position 0,0 without 
 * resizing the source;
 * Uses the three parameter version of drawImage():
 * ctx.drawImage(image, dx, dy)
 * dx:  draw staring x position
 * dy:  draw starting y position
 */

// const SPRITE_SHEET = new Image();                       // create Image obj
// SPRITE_SHEET.src = "./Assets/shadow_dog.png";           // set Image src

// function drawSpriteSheetNoMod() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   // clear canvas
//     ctx.drawImage(SPRITE_SHEET, 0, 0);                  // draw sprite sheet

//     requestAnimationFrame(drawSpriteSheetNoMod);    // call func for nxt frame
// }

// drawSpriteSheetNoMod();                                 // start animation

//#endregion


//#region - Draw Image to Canvas Modify Size & Position
/*
 * Draw image from external asset to canvas, starting at position 50, 50 and 
 * resized to fit inside a margin of 50;
 * Uses the five parameter version of drawImage():
 * ctx.drawImage(image, dx, dy, dw, dh)
 * dx:  draw staring x position
 * dy:  draw starting y position
 * dw:  draw width
 * dh:  draw height
 */

// const SPRITE_SHEET = new Image();                       // create Image obj
// SPRITE_SHEET.src = "./Assets/shadow_dog.png";           // set Image src

// function drawSpriteSheet() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   // clear canvas
    
//     // draw sprite sheet
//     ctx.drawImage(SPRITE_SHEET, 50, 50, CANVAS_WIDTH-100, CANVAS_HEIGHT-100);
//     requestAnimationFrame(drawSpriteSheet);          // call func for nxt frame
// }

// drawSpriteSheet();                                       // start animation

//#endregion


//#region - Draw Single Sprite From Image
/*
 * Draw a section of an image from external asset to canvas, display the section 
 * starting at position 50, 50 and resized to fit inside a margin of 50;
 * Uses the nine parameter version of drawImage():
 * ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
 * sx:  section starting x position
 * sy:  section starting y position
 * sw:  section width
 * sh:  section height
 * dx:  draw staring x position
 * dy:  draw starting y position
 * dw:  draw width
 * dh:  draw height
 */

//  const SPRITE_SHEET = new Image();                      // create Image obj
//  SPRITE_SHEET.src = "./Assets/shadow_dog.png";          // set Image src

//  const SPRITE_WIDTH = 575;                              // width of sprite area
//  const SPRITE_HEIGHT = 523;                             // height of sprite area
 
//  function drawSprite() {
//      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  // clear canvas
     
//      // draw sprite sheet
//      ctx.drawImage(
//         SPRITE_SHEET,                                   // image source
//         0, 0, SPRITE_WIDTH, SPRITE_HEIGHT,              // sprite section
//         50, 50, CANVAS_WIDTH-100, CANVAS_HEIGHT-100     // draw on canvas
//         );
//      requestAnimationFrame(drawSprite);             // call func for nxt frame
//  }
 
//  drawSprite();                                           // start animation
 
 //#endregion


 //#region - Animate Sprite
/*
 * Cycle through sections of sprite sheet to generate animation
 */

// const SPRITE_SHEET = new Image();                      // create Image obj
// SPRITE_SHEET.src = "./Assets/shadow_dog.png";          // set Image src

// const SPRITE_WIDTH = 575;                              // width of sprite area
// const SPRITE_HEIGHT = 523;                             // height of sprite area

// let sourceVertPos = 0;                                 // selects sprite strip
// let currentAnimationFrame = 0;                         // tracks current frame
// let maxAnimationFrames = 7;                            // max number of frames

// function animateSprite() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  // clear canvas
    
//     // draw sprite sheet
//     ctx.drawImage(
//        SPRITE_SHEET,                                    // image source
//        currentAnimationFrame * SPRITE_WIDTH,            // cycles through anim
//        sourceVertPos * SPRITE_HEIGHT,               // cycles through sprites
//        SPRITE_WIDTH, SPRITE_HEIGHT,                     // sprite section
//        50, 50, CANVAS_WIDTH-100, CANVAS_HEIGHT-100      // draw on canvas
//        );

//        // loop through each frame of sprite's animation
//        if (++currentAnimationFrame < maxAnimationFrames) {
//         currentAnimationFrame++;
//        } else {
//         currentAnimationFrame = 0;
//        }
    
//     requestAnimationFrame(animateSprite);             // call func for nxt frame
// }

// animateSprite();                                           // start animation

//#endregion


 //#region - Slow down Sprite Animation Sequence - Easy
/*
 * Reduce the FPS for animated sprites, simple method
 */

// const SPRITE_SHEET = new Image();                      // create Image obj
// SPRITE_SHEET.src = "./Assets/shadow_dog.png";          // set Image src

// const SPRITE_WIDTH = 575;                              // width of sprite area
// const SPRITE_HEIGHT = 523;                             // height of sprite area

// let sourceVertPos = 0;                                 // selects sprite strip
// let currentAnimationFrame = 0;                         // tracks current frame
// let maxAnimationFrames = 6;                            // max number of frames

// let currentGameFrame = 0;
// const staggerFrames = 6;

// function animateSpriteSlow() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  // clear canvas
    
//     // draw sprite sheet
//     ctx.drawImage(
//        SPRITE_SHEET,                                    // image source
//        currentAnimationFrame * SPRITE_WIDTH,            // cycles through anim
//        sourceVertPos * SPRITE_HEIGHT,               // cycles through sprites
//        SPRITE_WIDTH, SPRITE_HEIGHT,                     // sprite section
//        50, 50, CANVAS_WIDTH-100, CANVAS_HEIGHT-100      // draw on canvas
//        );

//     // only animate every nth frame
//     if (currentGameFrame % staggerFrames == 0) {       
//         // loop through each frame of sprite's animation
//         if (++currentAnimationFrame == maxAnimationFrames) {
//             currentAnimationFrame = 0;
//         }
//     }

//     currentGameFrame++;                                 // inc gameFrame
    
//     requestAnimationFrame(animateSpriteSlow);       // call func for nxt frame
// }

// animateSpriteSlow();                                    // start animation

//#endregion


 //#region - Slow down Sprite Animation Sequence - Advanced
/*
 * Reduce the FPS for animated sprites, advanced method
 */

const SPRITE_SHEET = new Image();                      // create Image obj
SPRITE_SHEET.src = "./Assets/shadow_dog.png";          // set Image src

const SPRITE_WIDTH = 575;                              // width of sprite area
const SPRITE_HEIGHT = 523;                             // height of sprite area

let sourceX = 0;
let sourceY = 0;

let maxAnimationFrames = 7;                            // max number of frames

let currentGameFrame = 0;
const staggerFrames = 6;

function animateSpriteSlowAdv() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);  // clear canvas

    // calculate sprite source
    sourceX =   SPRITE_WIDTH * 
            (   Math.floor(currentGameFrame/staggerFrames) % 
                maxAnimationFrames );
    
    // draw sprite sheet
    ctx.drawImage(
       SPRITE_SHEET,                                    // image source
       sourceX,                                         // cycles through anim
       sourceY * SPRITE_HEIGHT,               // cycles through sprites
       SPRITE_WIDTH, SPRITE_HEIGHT,                     // sprite section
       50, 50, CANVAS_WIDTH-100, CANVAS_HEIGHT-100      // draw on canvas
       );

    currentGameFrame++;                                 // inc gameFrame
    
    requestAnimationFrame(animateSpriteSlowAdv);    // call func for nxt frame
}

animateSpriteSlowAdv();                                    // start animation

//#endregion