/**
 * Load an image from source
 * 
 * @param {*} source    path for image to load
 * @returns sourced Image object
 */

export default function loadImage(source){

    const SPRITE_SHEET = new Image();
    SPRITE_SHEET.src = source;
    return SPRITE_SHEET;
    
}