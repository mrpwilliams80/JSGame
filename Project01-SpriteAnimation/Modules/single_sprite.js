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

 const SPRITE_WIDTH = 575;                              // width of sprite area
 const SPRITE_HEIGHT = 523;                             // height of sprite area
 
export default function drawSprite(canvas, image) {
    canvas.refresh()                                    // clear canvas
    
    // draw sprite sheet
    canvas.ctx.drawImage(
        image,                                          // image source
        0, 0, SPRITE_WIDTH, SPRITE_HEIGHT,              // sprite section
        50, 50, canvas.width-100, canvas.height-100     // draw on canvas
    );

    // call func for nxt frame
    requestAnimationFrame(() => drawSprite(canvas, image));
}