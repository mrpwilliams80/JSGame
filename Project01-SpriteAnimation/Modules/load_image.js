/*
 * Load an image from source
 */

export default function loadImage(source){

    const SPRITE_SHEET = new Image();
    SPRITE_SHEET.src = "./Assets/shadow_dog.png";
    return SPRITE_SHEET;
    
}