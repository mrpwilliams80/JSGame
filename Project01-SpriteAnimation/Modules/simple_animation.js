let x = 0;                                              // starting position

/**
 * Draw a block in the canvas and move it horizontally from one edge till it is 
 * off the other side
 * 
 * @param {*} canvas    object from canvas_setup.js
 */

export default function animateBlock(canvas){

    canvas.refresh();                                   // clear canvas
    canvas.ctx.fillRect(x, 50, 100, 100);               // draw block

    x++;                                                // inc h position
    
    // call func for nxt frame
    requestAnimationFrame(() => animateBlock(canvas))

}