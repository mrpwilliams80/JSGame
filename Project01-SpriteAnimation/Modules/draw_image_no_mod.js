/*
 * Draw an image from external asset to canvas, starting at position 0,0 without 
 * resizing the source;
 * Uses the three parameter version of drawImage():
 * ctx.drawImage(image, dx, dy)
 * dx:  draw staring x position
 * dy:  draw starting y position
 */

export default function drawSpriteSheetNoMod(canvas, image){

    canvas.refresh();                                   // clear canvas
    canvas.ctx.drawImage(image, 0, 0);                  // draw sprite sheet

    // call func for nxt frame
    requestAnimationFrame(() => drawSpriteSheetNoMod(canvas, image));

}