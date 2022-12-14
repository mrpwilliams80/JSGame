/**
 * Manage sprite animations using specific co-ordinates from data structure
 * 
 * @param {*} canvas            object from canvas_setup.js
 * @param {*} image             source image for animation frames
 * @param {*} nthFrame          frame on which to animate
 * @param {*} frameManager      object from frames.js
 * @param {*} spriteAnimations  object with coordinates for each frame on image
 * @param {*} state             animation selection data object
 */

export default function animateDataStructure(
    canvas, image, nthFrame, frameManager, spriteAnimations, state
    ){
    
    canvas.refresh()                                    // clear canvas

    // calculate sprite source this frame
    let currentAnimationFrame = Math.floor(frameManager.currentFrame/nthFrame) % 
                                spriteAnimations[state.value].loc.length;
    
    // draw from sprite sheet
    canvas.ctx.drawImage(
       image,
       spriteAnimations[state.value].loc[currentAnimationFrame].x,
       spriteAnimations[state.value].loc[currentAnimationFrame].y,
       spriteAnimations[state.value].width,
       spriteAnimations[state.value].height,
       50, 50, canvas.width-100, canvas.height-100
       );

    // inc gameFrame
    frameManager.incFrame();
    
    // call func for nxt frame
    requestAnimationFrame(() => animateDataStructure(
        canvas, image, nthFrame, frameManager, spriteAnimations, state
        ));

}