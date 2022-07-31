// shared values
const SPRITE_WIDTH          = 575;                      // width of sprite area
const SPRITE_HEIGHT         = 523;                      // height of sprite area

let spriteSelection         = 0;                        // selects sprite strip
let currentAnimationFrame   = 0;                        // tracks current frame
let maxAnimationFrames      = 6;                        // max number of frames

let currentGameFrame        = 0;                        // tracks current frame


/*
 * Reduce the FPS for animated sprites, simple method, currently unused
 */

function animateSpriteSlow(canvas, image, nthFrame){

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
    if (currentGameFrame % nthFrame == 0) {       
        // loop through each frame of sprite's animation
        if (++currentAnimationFrame == maxAnimationFrames) {
            currentAnimationFrame = 0;
        }
    }

    currentGameFrame++;                                 // inc gameFrame
    
    // call func for nxt frame
    requestAnimationFrame(() => animateSpriteSlow(canvas, image, nthFrame));
    
}


/*
 * Reduce the FPS for animated sprites, advanced method
 */

export default function animateSpriteSlowAdv(canvas, image, nthFrame) {

    canvas.refresh()                                    // clear canvas

    // calculate sprite source
    currentAnimationFrame =     SPRITE_WIDTH * 
                            (   Math.floor(currentGameFrame / nthFrame) % 
                                maxAnimationFrames  );
    
    // draw sprite sheet
    canvas.ctx.drawImage(
       image,                                           // image source
       currentAnimationFrame,                           // cycle through anim
       spriteSelection * SPRITE_HEIGHT,                 // cycle through sprites
       SPRITE_WIDTH, SPRITE_HEIGHT,                     // sprite section
       50, 50, canvas.width - 100, canvas.height - 100  // draw on canvas
       );

    currentGameFrame++;                                 // inc gameFrame
    
    // call func for nxt frame
    requestAnimationFrame(() => animateSpriteSlowAdv(canvas, image, nthFrame));

}