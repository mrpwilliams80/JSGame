//#region Imports
import createCanvas                 from "./Modules/canvas_setup.js";
import loadImage                    from "./Modules/load_image.js";
import animateBlock                 from "./Modules/simple_animation.js";
import drawSpriteSheetNoMod         from "./Modules/draw_image_no_mod.js";
import drawSpriteSheet              from "./Modules/draw_modified_image.js";
import drawSprite                   from "./Modules/single_sprite.js";
import animateSprite                from "./Modules/animate_sprite.js";
import animateSpriteSlow            from "./Modules/animate_sprite_slow.js";
import createFrameManager           from "./Modules/frames.js"
import createSpriteDataStructure    from "./Modules/sprite_data_structure.js";
import animateDataStructure         from "./Modules/animate_data_structure.js";
//#endregion

//#region User Constants
const CANVAS_WIDTH      = 600;
const CANVAS_HEIGHT     = 600;
const CANVAS_ID         = "canvas1";
const CANVAS_CONTEXT    = "2d";
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
        numOfFrames: 9,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "dizzy",
        numOfFrames: 11,
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
const canvas            = createCanvas(
                            CANVAS_ID, CANVAS_CONTEXT, CANVAS_WIDTH,
                            CANVAS_HEIGHT
                            );
const spriteSheet1      = loadImage("./Assets/shadow_dog.png");
const spriteAnimations  = createSpriteDataStructure(ANIMATION_STATES);
const frameManager      = createFrameManager();
//#endregion

let state="idle"

const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e) {
    state = e.target.value;
})

// animateBlock(canvas);
// drawSpriteSheetNoMod(canvas, spriteSheet1);
// drawSpriteSheet(canvas, spriteSheet1);
// drawSprite(canvas, spriteSheet1);
// animateSprite(canvas, spriteSheet1);
// animateSpriteSlow(canvas, spriteSheet1, 6)
animateDataStructure(
    canvas, spriteSheet1, 6, frameManager, spriteAnimations, state
    );

//TODO > Implement frameManger Across all modules
//TODO > load_image.js use param source
//TODO > better docs
//TODO > finish dropdown...