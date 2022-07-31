/**
 * Manage sprite animations using specific co-ordinates from data structure
 * @param {*} canvas            object from canvas_setup.js
 * @param {*} image             source image for animation frames
 * @param {*} nthFrame          frame on which to animate
 * @param {*} frameManager      object from frames.js
 * @param {*} spriteAnimations  object with coordinates for each frame on image
 * @param {*} state             which animation strip to cycle through
 */

export default function animateDataStructure(
    canvas, image, nthFrame, frameManager, spriteAnimations, state
    ){

    // clear canvas
    canvas.refresh()

    // calculate sprite source this frame
    let currentAnimationFrame = Math.floor(frameManager.currentFrame/nthFrame) % 
                                spriteAnimations[state].loc.length;
    
    // draw from sprite sheet
    canvas.ctx.drawImage(
       image,
       spriteAnimations[state].loc[currentAnimationFrame].x,
       spriteAnimations[state].loc[currentAnimationFrame].y,
       spriteAnimations[state].width, spriteAnimations[state].height,
       50, 50, canvas.width-100, canvas.height-100
       );

    // inc gameFrame
    frameManager.incFrame();
    
    // call func for nxt frame
    requestAnimationFrame(() => animateDataStructure(
        canvas, image, nthFrame, frameManager, spriteAnimations, state
        ));

}