// shared values
const SPRITE_WIDTH          = 575;                      // width of sprite area
const SPRITE_HEIGHT         = 523;                      // height of sprite area

let spriteSelection         = 0;                        // selects sprite strip
let currentAnimationFrame   = 0;                        // tracks current frame
let maxAnimationFrames      = 6;                        // max number of frames


/**
 * Reduce the FPS for animated sprites, simple method, currently unused
 * 
 * @param {*} canvas            object from canvas_setup.js
 * @param {*} image             source image for animation frames
 * @param {*} nthFrame          frame on which to animate
 * @param {*} frameManager      object from frames.js
 */

function animateSpriteSlow(canvas, image, nthFrame, frameManager){

    canvas.refresh()                                    // clear canvas
    
    // draw sprite sheet
    canvas.ctx.drawImage(
       image,                                           // image source
       currentAnimationFrame * SPRITE_WIDTH,            // cycle through anim
       spriteSelection * SPRITE_HEIGHT,                 // cycle through sprites
       SPRITE_WIDTH, SPRITE_HEIGHT,                     // sprite section
       50, 50, canvas.width - 100, canvas.height - 100  // draw on canvas
       );

    // only animate every nth frame
    if (frameManager.currentFrame % nthFrame == 0) {       
        // loop through each frame of sprite's animation
        if (++currentAnimationFrame == maxAnimationFrames) {
            currentAnimationFrame = 0;
        }
    }

    frameManager.incFrame();                            // inc gameFrame
    
    // call func for nxt frame
    requestAnimationFrame(() => animateSpriteSlow(
        canvas, image, nthFrame, frameManager
        ));
    
}


/**
 * Reduce the FPS for animated sprites, advanced method
 * 
 * @param {*} canvas            object from canvas_setup.js
 * @param {*} image             source image for animation frames
 * @param {*} nthFrame          frame on which to animate
 * @param {*} frameManager      object from frames.js
 */

export default function animateSpriteSlowAdv(
    canvas, image, nthFrame, frameManager
    ){

    canvas.refresh()                                    // clear canvas

    // calculate sprite source
    currentAnimationFrame =     SPRITE_WIDTH * 
                            (   Math.floor( frameManager.currentFrame /
                                            nthFrame) % 
                                maxAnimationFrames  );
    
    // draw sprite sheet
    canvas.ctx.drawImage(
       image,                                           // image source
       currentAnimationFrame,                           // cycle through anim
       spriteSelection * SPRITE_HEIGHT,                 // cycle through sprites
       SPRITE_WIDTH, SPRITE_HEIGHT,                     // sprite section
       50, 50, canvas.width - 100, canvas.height - 100  // draw on canvas
       );

    frameManager.incFrame();                            // inc gameFrame
    
    // call func for nxt frame
    requestAnimationFrame(() => animateSpriteSlowAdv(
        canvas, image, nthFrame, frameManager
        ));

}