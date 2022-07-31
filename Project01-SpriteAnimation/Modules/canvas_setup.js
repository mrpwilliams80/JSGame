/**
 * Setup canvas and create a canvas object
 * 
 * __OBJECT DATA:__
 * - _ctx_: context of canvas
 * - _width_: width of canvas
 * - _height_: height of canvas
 * 
 * __OBJECT METHODS:__
 * - _refresh()_: clear the entire canvas area
 * 
 * @param {*} id        id of canvas element
 * @param {*} context   context of canvas
 * @param {*} width     width of canvas
 * @param {*} height    height of canvas
 * @returns             canvas object
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