// Misc Values
const SPRITE_WIDTH          = 575;                      // width of sprite area
const SPRITE_HEIGHT         = 523;                      // height of sprite area

let sourceVertPos           = 0;                        // selects sprite strip
let currentAnimationFrame   = 0;                        // tracks current frame
let maxAnimationFrames      = 7;                        // max number of frames


/**
 * Cycle through sections of sprite sheet to generate animation
 * 
 * @param {*} canvas    object from canvas_setup.js
 * @param {*} image     source image for animation frames
 */

export default function animateSprite(canvas, image){

    canvas.refresh()                                    // clear canvas
    
    // draw sprite sheet
    canvas.ctx.drawImage(
        image,                                          // image source
        currentAnimationFrame * SPRITE_WIDTH,           // cycle through anim
        sourceVertPos * SPRITE_HEIGHT,                  // cycle through sprites
        SPRITE_WIDTH, SPRITE_HEIGHT,                    // sprite section
        50, 50, canvas.width-100, canvas.height-100     // draw on canvas
        );

        // loop through each frame of sprite's animation
        if (++currentAnimationFrame == maxAnimationFrames) {
            currentAnimationFrame = 0;
        }

        // call func for nxt frame
        requestAnimationFrame(() => animateSprite(canvas, image));
        
}