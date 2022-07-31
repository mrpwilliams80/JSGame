//#region Imports
import createCanvas                 from "./Modules/canvas_setup.js";
import loadImage                    from "./Modules/load_image.js";
import createFrameManager           from "./Modules/frames.js"
import animateBlock                 from "./Modules/simple_animation.js";
import drawSpriteSheetNoMod         from "./Modules/draw_image_no_mod.js";
import drawSpriteSheet              from "./Modules/draw_modified_image.js";
import drawSprite                   from "./Modules/single_sprite.js";
import animateSprite                from "./Modules/animate_sprite.js";
import animateSpriteSlow            from "./Modules/animate_sprite_slow.js";
//#endregion

//#region User Constants
const CANVAS_ID         = "canvas2"
const CANVAS_CONTEXT    = "2d";
const CANVAS_WIDTH      = getComputedStyle(
                            document.getElementById(CANVAS_ID)
                            ).getPropertyValue("width").slice(0,-2);
const CANVAS_HEIGHT     = getComputedStyle(
                            document.getElementById(CANVAS_ID)
                            ).getPropertyValue("height").slice(0,-2);
const SPRITE_WIDTH      = 575;
const SPRITE_HEIGHT     = 523;
const ANIMATION_STATES  = [
    {
        name: "idle",
        numOfFrames: 6,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "jump",
        numOfFrames: 7,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "fall",
        numOfFrames: 7,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "run",
        numOfFrames: 8,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "dizzy",
        numOfFrames: 10,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "sit",
        numOfFrames: 5,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "roll",
        numOfFrames: 6,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "bite",
        numOfFrames: 7,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "ko",
        numOfFrames: 12,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "getHit",
        numOfFrames: 4,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
];
//#endregion

//#region Calculated Constants
const canvas           = createCanvas (
                            CANVAS_ID, CANVAS_CONTEXT, CANVAS_WIDTH,
                            CANVAS_HEIGHT
                            );
const spriteSheet1      = loadImage("./Assets/shadow_dog.png");
const frameManager      = createFrameManager();
//#endregion

const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e) {
    switch (e.target.value){
        case "animateBlock":
            animateBlock(canvas, 0);
            break;
        case "fullSizeSpriteSheet":
            drawSpriteSheetNoMod(canvas, spriteSheet1);
            break;
        case "fitSpriteSheet":
            drawSpriteSheet(canvas, spriteSheet1);
            break;
        case "singeSprite":
            drawSprite(canvas, spriteSheet1);
            break;
        case "animatedSprite":
            animateSprite(canvas, spriteSheet1);
            break;
        // case "finalSprite":
        //     animateSpriteSlow(canvas, spriteSheet1, 6, frameManager)
        //     break;
    }
});
/* NOTE:
 * Technically, once started, each of the above continues to run indefinitely. 
 * This means the final two animated sprites will change speed if they are 
 * selected more than once. It does not matter as they are examples; the 
 * intermediate animations do not suffer from this problem.
 */

animateBlock(canvas, 0);