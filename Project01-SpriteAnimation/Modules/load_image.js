/*
 * Load an image from source
 */

export default function loadImage(source){

    const SPRITE_SHEET = new Image();
    SPRITE_SHEET.src = source;
    return SPRITE_SHEET;
    
}