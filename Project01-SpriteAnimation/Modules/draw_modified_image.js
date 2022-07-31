/**
 * Draw image from external asset to canvas, starting at position 50, 50 and 
 * resized to fit inside a margin of 50;
 * 
 * Five parameter version - drawImage(image, dx, dy, dw, dh) - where:</br>
 * - dx:  draw staring x position
 * - dy:  draw starting y position
 * - dw:  draw width
 * - dh:  draw height
 * 
 * @param {*} canvas    object from canvas_setup.js
 * @param {*} image     source image for animation frames
 */

export default function drawSpriteSheet(canvas, image){

    canvas.refresh()                                    // clear canvas
    
    // draw sprite sheet
    canvas.ctx.drawImage(
        image, 50, 50, canvas.width - 100, canvas.height - 100
        );

    // call func for nxt frame
    requestAnimationFrame(() => drawSpriteSheet(canvas, image));
    
}