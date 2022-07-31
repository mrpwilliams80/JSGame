/*
 * Setup canvas
 */

export default function createCanvas(id, context, width, height){

    const canvas = document.getElementById(id);
    const ctx = canvas.getContext(context);
    canvas.width = width;
    canvas.height = height;

    return {
        ctx: ctx,
        width: canvas.width,
        height: canvas.height,

        refresh() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        },
    }
    
}