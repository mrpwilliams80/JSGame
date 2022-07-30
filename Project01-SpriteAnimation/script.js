//#region Imports
import createCanvas from "./Modules/canvas_setup.js";
import loadImage from "./Modules/load_image.js";
import animateBlock from "./Modules/simple_animation.js";
import drawSpriteSheetNoMod from "./Modules/draw_image_no_mod.js";
import drawSpriteSheet from "./Modules/draw_modified_image.js";
import drawSprite from "./Modules/single_sprite.js";
import animateSprite from "./Modules/animate_sprite.js";
import animateSpriteSlow from "./Modules/animate_sprite_slow.js";
//#endregion

//#region Constants
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const CANVAS_ID = "canvas1";
const CANVAS_CONTEXT = "2d";
//#endregion

let canvas = createCanvas(  CANVAS_ID, CANVAS_CONTEXT, 
                            CANVAS_WIDTH, CANVAS_HEIGHT );

let spriteSheet1 = loadImage("./Assets/shadow_dog.png");

// animateBlock(canvas);
// drawSpriteSheetNoMod(canvas, spriteSheet1);
// drawSpriteSheet(canvas, spriteSheet1);
// drawSprite(canvas, spriteSheet1);
// animateSprite(canvas, spriteSheet1);
// animateSpriteSlow(canvas, spriteSheet1, 6)