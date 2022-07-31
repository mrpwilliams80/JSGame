/**
 * Draw an image from external asset to canvas, starting at position 0,0 without 
 * resizing the source;
 * 
 * Three parameter version - drawImage(image, dx, dy) - where:</br> 
 * - dx:  draw staring x position
 * - dy:  draw starting y position

 * 
 * @param {*} canvas    object from canvas_setup.js
 * @param {*} image     source image for animation frames
 */

export default function drawSpriteSheetNoMod(canvas, image){

    canvas.refresh();                                   // clear canvas
    canvas.ctx.drawImage(image, 0, 0);                  // draw sprite sheet

    // call func for nxt frame
    requestAnimationFrame(() => drawSpriteSheetNoMod(canvas, image));

}